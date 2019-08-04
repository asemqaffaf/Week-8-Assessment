class shape{
    constructor(height,length,area){
        this.height = height;
        this.length = length;
        this.area = area;
        this.getteArea = function(){
            return this.area 
      }
    }
  
}

    var inst = new shape("13CM","12CM","256CM2")

   console.log(inst.getteArea());

   document.write(" height: " + inst.height + " length " + inst.length + " getteArea " + inst.getteArea() )