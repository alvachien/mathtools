
function drawFunc(obj) {
  var canvas = document.getElementById('content');
  if (!canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  let fullwidth = canvas.width;
  let fullheight = canvas.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let gridcount = document.getElementById('gridcount').value;

  if (obj.options[obj.selectedIndex].value === 'abs') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawAbs(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'sgn') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawSgn(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'ceil') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawCeil(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'round') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawRound(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'floor') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawFloor(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'sin') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawSin(ctx, gridcount, fullwidth, fullheight);
  } else if (obj.options[obj.selectedIndex].value === 'cos') {
    drawCartesian(ctx, gridcount, fullwidth, fullheight);
    drawCos(ctx, gridcount, fullwidth, fullheight);
  }
}

function gridChange(obj) {
  console.log(obj.value);
}

function drawCartesian(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  ctx.fillText('O', cpx + xsize / 4, cpy + 3 * ysize / 4);

  // Axis - X
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, cpy);
  ctx.lineTo(fullwidth, cpy);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fullwidth, cpy);
  ctx.lineTo(fullwidth - xsize / 2, cpy - xsize / 8);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fullwidth, cpy);
  ctx.lineTo(fullwidth - xsize / 2, cpy + xsize / 8);
  ctx.closePath();
  ctx.stroke();
  ctx.save();
  ctx.fillText('x', fullwidth - xsize / 2, cpy + 3 * ysize / 4);

  ctx.setLineDash([5, 10]);
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 0.5;
  for (var i = 1; i < 2 * gridcount; i++) {
    ctx.beginPath();
    ctx.moveTo(xsize * i, 0);
    ctx.lineTo(xsize * i, fullheight);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();

  // Axis - Y
  ctx.fillText('y', cpx + xsize / 4, ysize);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cpx, 0);
  ctx.lineTo(cpx, fullheight);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cpx, 0);
  ctx.lineTo(cpx - xsize / 4, xsize / 4);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cpx, 0);
  ctx.lineTo(cpx + xsize / 4, xsize / 4);
  ctx.closePath();
  ctx.stroke();
  ctx.save();

  ctx.setLineDash([5, 10]);
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 0.5;
  for (var i = 1; i < 2 * gridcount; i++) {
    ctx.beginPath();
    ctx.moveTo(0, ysize * i);
    ctx.lineTo(fullwidth, ysize * i);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

function drawAbs(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // ABS
  ctx.beginPath();
  ctx.moveTo(cpx, cpy);
  ctx.lineTo(fullwidth, 0);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cpx, cpy);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.stroke();
}

function drawSgn(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // SGN
  ctx.beginPath();
  ctx.moveTo(cpx, cpy - ysize);
  ctx.lineTo(fullwidth, cpy - ysize);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cpx, cpy + ysize);
  ctx.lineTo(0, cpy + ysize);
  ctx.closePath();
  ctx.stroke();
}

function drawCeil(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // Ceil
  let x = -1 * gridcount / 2;
  ctx.beginPath();
  for (; x <= gridcount / 2; x += 1) {
    ctx.moveTo(cpx + x * xsize, cpy - Math.ceil(x + 0.1) * ysize);
    ctx.lineTo(cpx + x * xsize + xsize, cpy - ysize * Math.ceil(x + 0.1));
    ctx.stroke();
  }
  ctx.closePath();
}

function drawRound(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // Round
  let x = -1 * gridcount / 2;
  ctx.beginPath();
  for (; x < gridcount / 2; x += 0.5) {
    ctx.moveTo(cpx + x * xsize, cpy - Math.round(x + 0.1) * ysize);
    ctx.lineTo(cpx + x * xsize + xsize / 2, cpy - ysize * Math.round(x + 0.1));
    ctx.stroke();
  }
  ctx.closePath();
}

function drawFloor(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // Floor
  let x = -1 * gridcount / 2;
  ctx.beginPath();
  for (; x < gridcount / 2; x += 1) {
    ctx.moveTo(cpx + x * xsize, cpy - Math.floor(x + 0.1) * ysize);
    ctx.lineTo(cpx + x * xsize + xsize, cpy - ysize * Math.floor(x + 0.1));
    ctx.stroke();
  }
  ctx.closePath();
}

function drawSin(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // SIN
  let x = -1 * gridcount / 2;
  ctx.beginPath();
  ctx.moveTo(cpx + x * xsize, cpy - Math.sin(x) * ysize);
  for (; x < gridcount / 2; x += 0.1) {
    ctx.lineTo(cpx + x * xsize, cpy - ysize * Math.sin(x));
    ctx.stroke();
  }
  ctx.closePath();
}

function drawCos(ctx, gridcount, fullwidth, fullheight) {
  let xsize = fullwidth / gridcount;
  let ysize = fullheight / gridcount;
  let cpx = fullwidth / 2;
  let cpy = fullheight / 2;

  // COS
  let x = -1 * gridcount / 2;
  ctx.beginPath();
  ctx.moveTo(cpx + x * xsize, cpy - Math.cos(x) * ysize);
  for (; x < gridcount / 2; x += 0.1) {
    ctx.lineTo(cpx + x * xsize, cpy - ysize * Math.cos(x));
    ctx.stroke();
  }
  ctx.closePath();
}
