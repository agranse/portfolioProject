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
    const fgPath = document.getElementById('hero-mountain-fg') as SVGPathElement | null;
    if (!fgPath) return;


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
      const peaks: { x: number; height: number; width: number }[] = [];
      const heroX = 0.35 + Math.random() * 0.3;

      peaks.push({
        x: heroX,
        height: maxHeight * (0.85 + Math.random() * 0.15),
        width: minWidth * (0.8 + Math.random() * 0.4)
      });

      while (peaks.length < peakCount) {
        const rawX = Math.pow(Math.random(), asymmetryBias);
        const height = minHeight + Math.random() * (maxHeight - minHeight);
        const weightedHeight = height * (0.7 + Math.random() * 0.6);
        const width = minWidth + Math.random() * (maxWidth - minWidth);
        if (peaks.some(p => Math.abs(p.x - rawX) < 0.08)) continue;
        peaks.push({ x: rawX, height: weightedHeight, width });
      }

      peaks.sort((a, b) => a.x - b.x);

      for (let i = 0; i <= 200; i++) {
        const t = i / 200;
        const x = t * width;
        let y = baseY;

        for (const peak of peaks) {
          const dist = Math.abs(t - peak.x);
          const slope = Math.max(0, 1 - dist / peak.width);
          y -= slope * peak.height;
        }

        const chaosEvents = 6;
        const chaosAmp = peakCount * 1.2;
        const chaosPositions = Array.from({ length: chaosEvents }).map(() => Math.random());
        chaosPositions.sort();
        let chaos = 0;

        for (const pos of chaosPositions) {
          const dist = Math.abs(t - pos);
          if (dist < 0.03) {
            const strength = (1 - dist / 0.03);
            chaos -= strength * chaosAmp * (0.7 + Math.random() * 0.3);
          }
        }

        y += chaos;
        rawPoints.push({ x, y });
      }

      const minY = Math.min(...rawPoints.map(p => p.y));
      if (minY < 0) {
        const scale = baseY / (baseY - minY);
        for (const p of rawPoints) {
          p.y = baseY - (baseY - p.y) * scale;
        }
      }

      return `M ${rawPoints[0].x},${rawPoints[0].y} ` +
      rawPoints.slice(1).map(p => `L ${p.x},${p.y}`).join(' ');
    };

    const fgD = makeMountainPath(
      185,   // baseY (lower)
      7,     // peakCount
      60,    // minHeight
      140,   // maxHeight
      0.05,  // minWidth
      0.12,  // maxWidth
      2.6    // asymmetry bias
    );

    fgPath.setAttribute('d', fgD);
  }
}
