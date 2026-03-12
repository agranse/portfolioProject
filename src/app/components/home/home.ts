import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
})
export class Home implements AfterViewInit {

  ngAfterViewInit() {
    this.generateMountains();
  }

  private generateMountains() {
  const bgPath = document.getElementById('hero-mountain-bg') as SVGPathElement | null;
  const fgPath = document.getElementById('hero-mountain-fg') as SVGPathElement | null;

  if (!bgPath || !fgPath) return;

  // --- Dramatic, asymmetric, layered mountain generator with height clamping ---
  const makeMountainPath = (
  baseY: number,
  peakCount: number,
  minHeight: number,
  maxHeight: number,
  minWidth: number,
  maxWidth: number,
  asymmetryBias: number
) => {
  const width = 1000;
  const rawPoints: { x: number; y: number }[] = [];

  // Step 1: Generate asymmetric peaks
  const peaks = Array.from({ length: peakCount }).map(() => {
    const rawX = Math.random();
    const biasedX = Math.pow(rawX, asymmetryBias);

    return {
      x: biasedX,
      height: minHeight + Math.random() * (maxHeight - minHeight),
      width: minWidth + Math.random() * (maxWidth - minWidth)
    };
  }).sort((a, b) => a.x - b.x);

  // Step 2: Build raw silhouette
  for (let i = 0; i <= 200; i++) {
    const t = i / 200;
    const x = t * width;

    let y = baseY;

    for (const peak of peaks) {
      const dist = Math.abs(t - peak.x);
      const slope = Math.max(0, 1 - dist / peak.width);
      y -= slope * peak.height;
    }

    rawPoints.push({ x, y });
  }

  // Step 3: SCALE peaks if they exceed the top (y < 0)
  const minY = Math.min(...rawPoints.map(p => p.y));

  if (minY < 0) {
    const scale = baseY / (baseY - minY); // scale factor to keep peaks inside viewBox

    for (const p of rawPoints) {
      p.y = baseY - (baseY - p.y) * scale;
    }
  }

  // Convert to path
  const path = rawPoints.map(p => `${p.x},${p.y}`);
  return `M ${path[0]} L ${path.slice(1).join(' L ')}`;
};








  // Background: more peaks, softer, lower, asymmetric
  const bgD = makeMountainPath(
    165,   // baseY (lower)
    5,     // peakCount
    20,    // minHeight
    50,    // maxHeight
    0.10,  // minWidth
    0.20,  // maxWidth
    1.8    // asymmetry bias
  );

  // Foreground: many peaks, very sharp, very tall, heavily asymmetric
  const fgD = makeMountainPath(
    185,   // baseY (lower)
    7,     // peakCount
    60,    // minHeight
    140,   // maxHeight
    0.05,  // minWidth
    0.12,  // maxWidth
    2.6    // asymmetry bias
  );

  bgPath.setAttribute('d', bgD);
  fgPath.setAttribute('d', fgD);
}



}
