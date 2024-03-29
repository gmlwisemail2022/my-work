/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {

    // if creating new shapes after undo, need to save old canvas first because old canvas already popped out!
    SaveOldImage();
    // Stroke color
    this.context.strokeStyle = hex.value;
    // Kind of line
    this.context.lineJoin = "round";
    // Width of line
    this.context.lineWidth = width.value;
    // Drawing the line here
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {
    // Save the drawing into the array for future modification //
    SaveNewImage();

  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    // Draw the line onto the page
    this.context.strokeStyle = hex.value;
    this.context.stroke();
  }
}
