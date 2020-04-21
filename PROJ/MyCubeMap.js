/**
 * MyCubMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad1 = new MyQuad(scene);
        this.initTextures(this.scene);
    }
    initTextures(scene){
        this.texFront = new CGFappearance(scene);
        this.texFront.setAmbient(0.9,0.9,0.9,1);
        this.texFront.setDiffuse(0.9,0.9,0.9,1);
        this.texFront.setSpecular(0.1,0.1,0.1,1);
        this.texFront.setShininess(10.0);
        this.texFront.loadTexture('images/split_cubemap/front.png');
        this.texFront.setTextureWrap('REPEAT', 'REPEAT');

        this.texBack = new CGFappearance(scene);
        this.texBack.setAmbient(0.9,0.9,0.9,1);
        this.texBack.setDiffuse(0.9,0.9,0.9,1);
        this.texBack.setSpecular(0.1,0.1,0.1,1);
        this.texBack.setShininess(10.0);
        this.texBack.loadTexture('images/split_cubemap/back.png');
        this.texBack.setTextureWrap('REPEAT', 'REPEAT');

        this.texTop = new CGFappearance(scene);
        this.texTop.setAmbient(0.9,0.9,0.9,1);
        this.texTop.setDiffuse(0.9,0.9,0.9,1);
        this.texTop.setSpecular(0.1,0.1,0.1,1);
        this.texTop.setShininess(10.0);
        this.texTop.loadTexture('images/split_cubemap/top.png');
        this.texTop.setTextureWrap('REPEAT', 'REPEAT');

        this.texBtm = new CGFappearance(scene);
        this.texBtm.setAmbient(0.9,0.9,0.9,1);
        this.texBtm.setDiffuse(0.9,0.9,0.9,1);
        this.texBtm.setSpecular(0.1,0.1,0.1,1);
        this.texBtm.setShininess(10.0);
        this.texBtm.loadTexture('images/split_cubemap/bottom.png');
        this.texBtm.setTextureWrap('REPEAT', 'REPEAT');

        this.texRight= new CGFappearance(scene);
        this.texRight.setAmbient(0.9,0.9,0.9,1);
        this.texRight.setDiffuse(0.9,0.9,0.9,1);
        this.texRight.setSpecular(0.1,0.1,0.1,1);
        this.texRight.setShininess(10.0);
        this.texRight.loadTexture('images/split_cubemap/right.png');
        this.texRight.setTextureWrap('REPEAT', 'REPEAT');

        this.texLeft = new CGFappearance(scene);
        this.texLeft.setAmbient(0.9,0.9,0.9,1);
        this.texLeft.setDiffuse(0.9,0.9,0.9,1);
        this.texLeft.setSpecular(0.1,0.1,0.1,1);
        this.texLeft.setShininess(10.0);
        this.texLeft.loadTexture('images/split_cubemap/left.png');
        this.texLeft.setTextureWrap('REPEAT', 'REPEAT');


    }

    display(){
        this.scene.scale(5,5,5);

        //lado 1 frente
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.texFront.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //lado 2 tras
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(180*Math.PI/180,0,1,0);
        this.texBack.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //lado 3 dir
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.texRight.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //lado 4 esq
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.texLeft.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //base
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.texBtm.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //topo
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.texTop.apply();
        this.quad1.display();
        this.scene.popMatrix();
    }

}