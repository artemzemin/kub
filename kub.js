window.addEventListener('DOMContentLoaded', () => {
  const mainRectangle = document.getElementById('main-rectangle');
  const svgNS = mainRectangle.namespaceURI;

  const centralX = 110;
  const centralY = 110;
  const rectWidth = 10;
  const rectHeight = 100;
  const rectDistance = 35;

  // Верхний прямоугольник
  const topRect = document.createElementNS(svgNS, 'rect');
  topRect.setAttribute('x', centralX - rectWidth / 2);
  topRect.setAttribute('y', centralY - rectDistance - rectHeight);
  topRect.setAttribute('width', rectWidth);
  topRect.setAttribute('height', rectHeight);
  topRect.setAttribute('class', 'rectangle');

  // Нижний прямоугольник
  const bottomRect = document.createElementNS(svgNS, 'rect');
  bottomRect.setAttribute('x', centralX - rectWidth / 2);
  bottomRect.setAttribute('y', centralY + rectDistance);
  bottomRect.setAttribute('width', rectWidth);
  bottomRect.setAttribute('height', rectHeight);
  bottomRect.setAttribute('class', 'rectangle');

  // Левый прямоугольник
  const leftRect = document.createElementNS(svgNS, 'rect');
  leftRect.setAttribute('x', centralX - rectDistance - rectHeight);
  leftRect.setAttribute('y', centralY - rectWidth / 2);
  leftRect.setAttribute('width', rectHeight);
  leftRect.setAttribute('height', rectWidth);
  leftRect.setAttribute('class', 'rectangle');

  // Правый прямоугольник
  const rightRect = document.createElementNS(svgNS, 'rect');
  rightRect.setAttribute('x', centralX + rectDistance);
  rightRect.setAttribute('y', centralY - rectWidth / 2);
  rightRect.setAttribute('width', rectHeight);
  rightRect.setAttribute('height', rectWidth);
  rightRect.setAttribute('class', 'rectangle');

  mainRectangle.appendChild(topRect);
  mainRectangle.appendChild(bottomRect);
  mainRectangle.appendChild(leftRect);
  mainRectangle.appendChild(rightRect);
});
