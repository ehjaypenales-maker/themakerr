import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // CORE CRYSTAL GEOMETRY (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    
    // Add wireframe material with neon cyber blue/cyan glow
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // INNER GEOMETRY (Metallic solid core)
    const innerGeo = new THREE.OctahedronGeometry(0.8, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0xbd00ff, // Neon Purple
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x5a0099,
      emissiveIntensity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // ORBITAL RING 1 (Torus)
    const ring1Geo = new THREE.TorusGeometry(2.8, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 4;
    scene.add(ring1);

    // ORBITAL RING 2 (Torus perpendicular)
    const ring2Geo = new THREE.TorusGeometry(3.2, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // PARTICLES / NEBULA ACCENTS
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates in a shell around the crystal
      const radius = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Speed multipliers
      velocities.push((Math.random() - 0.5) * 0.02); // x speed
      velocities.push((Math.random() - 0.5) * 0.02); // y speed
      velocities.push((Math.random() - 0.5) * 0.02); // z speed
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom glowing particle dot
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0a0a0f, 2.0);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xbd00ff, 4.0, 15); // Neon Purple
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00f0ff, 3.5, 15); // Neon Blue
    pointLight2.position.set(-3, -3, 3);
    scene.add(pointLight2);

    // Interactive mouse tracking move listener
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x * 1.5;
      mouseRef.current.targetY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        camera.aspect = entryWidth / entryHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(entryWidth, entryHeight);
      }
    });
    resizeObserver.observe(container);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerping)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Base rotations
      mesh.rotation.y = elapsedTime * 0.15;
      mesh.rotation.x = elapsedTime * 0.1;
      
      innerMesh.rotation.y = -elapsedTime * 0.35;
      innerMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.25;
      ring1.rotation.y = elapsedTime * 0.05;
      
      ring2.rotation.z = -elapsedTime * 0.2;
      ring2.rotation.x = elapsedTime * 0.08;

      // Apply mouse-based tilt (interactive look)
      mesh.rotation.y += mouseRef.current.x * 0.4;
      mesh.rotation.x += mouseRef.current.y * 0.4;
      
      ring1.rotation.y += mouseRef.current.x * 0.2;
      ring2.rotation.x += mouseRef.current.y * 0.2;

      // Pulse scaling base on hover or time
      const scaleMultiplier = hovered ? 1.15 + Math.sin(elapsedTime * 4) * 0.05 : 1 + Math.sin(elapsedTime * 2) * 0.04;
      mesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
      innerMesh.scale.set(1 + Math.sin(elapsedTime * 3) * 0.1, 1 + Math.sin(elapsedTime * 3) * 0.1, 1 + Math.sin(elapsedTime * 3) * 0.1);

      // Animate particles rotating slowly
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      // Update light positions slightly based on mouse for shiny reflection
      pointLight1.position.x = 3 + mouseRef.current.x * 2;
      pointLight1.position.y = 3 + mouseRef.current.y * 2;
      pointLight2.position.x = -3 - mouseRef.current.x * 2;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose resources securely to prevent memory leaks
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [hovered]);

  return (
    <div 
      className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseRef.current.targetX = 0;
        mouseRef.current.targetY = 0;
      }}
    >
      {/* 3D Render Canvas target container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" id="threejs-canvas-core" />
      
      {/* Decorative center holographic metadata label */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center select-none">
        <span className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase">Aetheris Grid</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent mt-1" />
      </div>
    </div>
  );
}
