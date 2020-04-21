class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     */
    constructor(scene, slices) {
        super(scene);
        this.slice = slices;
        this.initBuffers();
    }

    /**
     * @method initBuffers
     * Initializes the cylinder buffers
     * TODO: DEFINE TEXTURE COORDINATES
     */
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var phi = 0;
        var theta = 0;
        var phiInc = 2*Math.PI / this.slice;
        var thetaInc = 1/this.slice;

        // build an all-around stack at a time, starting on "north pole" and proceeding "south"
        for (var i = 0; i <= this.slice; i++) {
            var sinPhi = Math.sin(phi); //z
            var cosPhi = Math.cos(phi); //x

            this.vertices.push(cosPhi, 0, -sinPhi);
            this.vertices.push(cosPhi, 1, -sinPhi);
            this.normals.push(cosPhi, 0, -sinPhi);
            this.normals.push(cosPhi, 0, -sinPhi);
            this.texCoords.push(theta, 1);
            //(i/this.slice)
            this.texCoords.push(theta, 0);
            if(i != this.slice){
                this.indices.push(2*i, 2*i+2, 2*i+1);
                this.indices.push(2*i+2, 2*i+3, 2*i+1);
            }
            phi += phiInc;
            theta += thetaInc;
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    display() {
        this.scene.pushMatrix();
        this.scene.defaultMaterial.apply();
        this.scene.popMatrix();
        super.display();
    }
}
