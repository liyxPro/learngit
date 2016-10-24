/**全局变量**/
var canvasWidth = 480;	//画布的宽
var canvasHeight = 650;	//画布的高
var canvas=document.getElementById("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx=canvas.getContext('2d');

const PHASE_DOWLOAD=1;
const PHASE_READY=2;
const PHASE_LOADING=3;
const PHASE_PLAY=4;
const PHASE_PAUSE=5;
const PHASE_GAMEOVER=6;

var imgBackground;

var imgBullet1;

var imgEnemy1=[];
var imgEnemy2=[];
var imgEnemy3=[];
var imgGameLoading=[];
var imgGamePauseNor;
var imgHero=[];
var imgStart;

var curPhase=PHASE_DOWLOAD;
download();
function download(){
	var progress=0;//下载速度
	ctx.font="60px Helvetica";
	ctx.fillStyle="#999";
	function drawProgress(){
		var txt=progress+'%';
		ctx.clearRect(0,0,canvasWidth,canvasHeight);
		var w=ctx.measureText(txt).width;
		
		ctx.fillText(txt,canvasWidth/2-w/2,canvasHeight/2+80/2);
		ctx.strokeText(txt,canvasWidth/2-w/2,canvasHeight/2+80/2);
		
		if(progress>=100){
			startGame();
			
		}
		
	}
	//背景加载
	imgBackground=new Image();
	imgBackground.src='img/background.png';
	imgBackground.onload=function(){
		progress+=4;
		drawProgress();
	}
    //子弹加载
	imgBullet1=new Image();
	imgBullet1.src='img/bullet1.png';
	imgBullet1.onload=function(){
		progress+=3;
		drawProgress();
	}
	//敌机1加载
	imgEnemy1[0]=new Image();
	imgEnemy1[0].src='img/enemy1.png';
	imgEnemy1[0].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy1[1]=new Image();
	imgEnemy1[1].src='img/enemy1_down1.png';
	imgEnemy1[1].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy1[2]=new Image();
	imgEnemy1[2].src='img/enemy1_down2.png';
	imgEnemy1[2].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy1[3]=new Image();
	imgEnemy1[3].src='img/enemy1_down3.png';
	imgEnemy1[3].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy1[4]=new Image();
	imgEnemy1[4].src='img/enemy1_down4.png';
	imgEnemy1[4].onload=function(){
		progress+=3;
		drawProgress();
	}
	//敌机2加载
	imgEnemy2[0]=new Image();
	imgEnemy2[0].src="img/enemy2.png";
	imgEnemy2[0].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy2[1]=new Image();
	imgEnemy2[1].src="img/enemy2_down1.png";
	imgEnemy2[1].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy2[2]=new Image();
	imgEnemy2[2].src="img/enemy2_down2.png";
	imgEnemy2[2].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy2[3]=new Image();
	imgEnemy2[3].src="img/enemy2_down3.png";
	imgEnemy2[3].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy2[4]=new Image();
	imgEnemy2[4].src="img/enemy2_down4.png";
	imgEnemy2[4].onload=function(){
		progress+=3;
		drawProgress();
	}
	//敌机3加载
	imgEnemy3[0]=new Image();
	imgEnemy3[0].src="img/enemy3_n1.png";
	imgEnemy3[0].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[1]=new Image();
	imgEnemy3[1].src="img/enemy3_n2.png";
	imgEnemy3[1].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[2]=new Image();
	imgEnemy3[2].src="img/enemy3_hit.png";
	imgEnemy3[2].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[3]=new Image();
	imgEnemy3[3].src="img/enemy3_down1.png";
	imgEnemy3[3].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[4]=new Image();
	imgEnemy3[4].src="img/enemy3_down2.png";
	imgEnemy3[4].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[5]=new Image();
	imgEnemy3[5].src="img/enemy3_down3.png";
	imgEnemy3[5].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[6]=new Image();
	imgEnemy3[6].src="img/enemy3_down4.png";
	imgEnemy3[6].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[7]=new Image();
	imgEnemy3[7].src="img/enemy3_down5.png";
	imgEnemy3[7].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgEnemy3[8]=new Image();
	imgEnemy3[8].src="img/enemy3_down6.png";
	imgEnemy3[8].onload=function(){
		progress+=3;
		drawProgress();
	}
	//游戏加载图片加载
	imgGameLoading[0]=new Image();
	imgGameLoading[0].src="img/game_loading1.png";
	imgGameLoading[0].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgGameLoading[1]=new Image();
	imgGameLoading[1].src="img/game_loading2.png";
	imgGameLoading[1].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgGameLoading[2]=new Image();
	imgGameLoading[2].src="img/game_loading3.png";
	imgGameLoading[2].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgGameLoading[3]=new Image();
	imgGameLoading[3].src="img/game_loading4.png";
	imgGameLoading[3].onload=function(){
		progress+=3;
		drawProgress();
	}
	//游戏暂停加载的加载
	imgGamePauseNor=new Image();
	imgGamePauseNor.src="img/game_pause_nor.png";
	imgGamePauseNor.onload=function(){
		progress+=3;
		drawProgress();
	}
	//英雄级图片加载
	imgHero[0]=new Image();
	imgHero[0].src="img/hero1.png";
	imgHero[0].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgHero[1]=new Image();
	imgHero[1].src="img/hero2.png";
	imgHero[1].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgHero[2]=new Image();
	imgHero[2].src="img/hero_blowup_n1.png";
	imgHero[2].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgHero[3]=new Image();
	imgHero[3].src="img/hero_blowup_n2.png";
	imgHero[3].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgHero[4]=new Image();
	imgHero[4].src="img/hero_blowup_n3.png";
	imgHero[4].onload=function(){
		progress+=3;
		drawProgress();
	}
	imgHero[5]=new Image();
	imgHero[5].src="img/hero_blowup_n4.png";
	imgHero[5].onload=function(){
		progress+=3;
		drawProgress();
	}
	//开始图片加载
	imgStart=new Image();
	imgStart.src="img/start.png";
	imgStart.onload=function(){
		progress+=3;
		drawProgress();
	}
}

/***阶段2:就绪***/
var sky;//天空对象
var logo;//游戏logo对象
function startGame(){
	curPhase=PHASE_READY;
	sky=new Sky(imgBackground);//创建天空对象
	logo=new Logo(imgStart);
	startEngine();//启动整个游戏的主引擎——定时器
	canvas.onclick=function(){
		if(curPhase===PHASE_READY){
			curPhase=PHASE_LOADING;
			loading=new Loading(imgGameLoading);
		}
	}
}
function Sky(img){
	this.x1=0;//初始时第一张背景图的坐标
	this.y1=0;
    this.x2=0;//初始时第二张背景图的坐标
    this.y2=-img.height;
    this.draw=function(){
    	ctx.drawImage(img,this.x1,this.y1);
    	ctx.drawImage(img,this.x2,this.y2);
    }
    this.move=function(){
    	this.y1++; //图片坐标下移
    	this.y2++;
    	if(this.y1>=canvasHeight){//第一张背景图移出画布
    		this.y1=this.y2-img.height;
    	}
    	if(this.y2>=canvasHeight){//第二张背景图移出画布
    		this.y2=this.y1-img.height;
    	}
    }
}

function Logo(img){
	this.x=canvasWidth/2-img.width/2;
	this.y=canvasHeight/2-img.height/2;
	this.draw=function(){
		ctx.drawImage(img,this.x,this.y);
	}
}
/***阶段3:加载中-V3***/
//var loading=new Loading(imgGameLoading);
var loading;
function Loading(img){
	this.x=0;
	this.y=canvasHeight-img[0].height;
	this.index=0;//当前要绘制的是哪一张图片的下标
	this.draw=function(){
		ctx.drawImage(img[this.index],this.x,this.y);
	}
	this.counter=0;//记录move调用次数
	
	this.move=function(){
		this.counter++;
		if(this.counter%6==0){
			this.index++;
			if(this.index>=img.length){
				curPhase=PHASE_PLAY;
				//进入游戏，创建我方英雄
				hero=new Hero(imgHero);
				//创建子弹，敌机
				bulletList=new BulletList();
				enemyList=new EnemyList();
			}
		}
	}
}
/***阶段4:游戏进行中***/
var hero;
function Hero(imgs){
	//英雄机初始时出现在屏幕下方中央
	this.x=canvasWidth/2-imgs[0].width/2;
	this.y=canvasHeight-imgs[0].height;
	this.index=0;//待绘制的是数组中的哪个图片的下标
	this.draw=function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
	this.counter=0;//move函数被调用的次数
	this.move=function(){
		this.counter++;
		if(this.counter%3==0){
			if(this.index===0){
				this.index=1;
			}else if(this.index===1){
				this.index=0;
			}
		}
		if(this.counter%7==0){//此处的10指定间隔两发子弹的时间
				this.fire();
		}
	}
	this.fire=function(){
		var b=new Bullet(imgBullet1);
		bulletList.add(b);
	}
}
function Bullet(img){
	this.x=hero.x+(imgHero[0].width/2-img.width/2);
	this.y=hero.y-img.height;
	this.removable=false;
	this.draw=function(){
	//	console.log(this.x);
//	console.log(bullet.drawFocusRing())
		ctx.drawImage(img,this.x,this.y);
	}
	this.move=function(){
		this.y-=5;
		//移除无效子弹
		if(this.y<=-img.height){
			this.removable=true;
			
			
		}
	}
}
var bulletList;
function BulletList(img){
	this.arr=[];//所有子弹
	this.add=function(bullet){//添加子弹
		this.arr.push(bullet);
	}
	this.remove=function(i){
		this.arr.splice(i,1);
	}
	this.draw = function(){	//绘制每一个子弹
//		console.log('bulletList.draw...'+this.arr.length);
		for(var i in this.arr){
			this.arr[i].draw();
		}
	}
	this.move = function(){
		for(var i in this.arr){
			this.arr[i].move(); //让每个子弹都移动
			if(this.arr[i].removable){
				this.remove(i);
			}
		}
	}
}
function Enemy1(imgs){
	this.x=Math.random()*(canvasWidth-imgs[0].width);
	this.y=-imgs[0].height;
	this.index=0;
	this.speed = 7;  //小敌机每42ms移动的距离——即飞行速度
	this.removable=false;
	this.draw=function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
	this.move=function(){
		this.y+=this.speed;
		//若飞出下边界或炸毁了，则可以删除了
		if(this.y>=canvasHeight){ //飞出下边界
			this.removable = true;
		}
	}
}

//中号敌机
function Enemy2(imgs){
	this.x = Math.random()*(canvasWidth-imgs[0].width);
	this.y = -imgs[0].height;
	this.index = 0; //当前绘制的图片在数组中的下标
	this.speed = 4;  //中号敌机每42ms移动的距离——即飞行速度
	this.removable = false; //可以删除了吗
	this.blood = 3;  //中号敌机有3格血
	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
	this.move = function(){
		this.y+=this.speed;
		//若飞出下边界或炸毁了，则可以删除了
		if(this.y>=canvasHeight){ //飞出下边界
			this.removable = true;
		}
	}
}
//大号敌机
function Enemy3(imgs){
	this.x = Math.random()*(canvasWidth-imgs[0].width);
	this.y = -imgs[0].height;
	this.index = 0; //当前绘制的图片在数组中的下标
	this.speed = 2;  //大号敌机每42ms移动的距离——即飞行速度
	this.removable = false; //可以删除了吗
	this.blood = 7;  //大敌机有7格血
	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
	this.counter = 0; //move()函数被调用的次数
	this.move = function(){
		this.counter++;
		if(this.counter%2===0){
			if(this.index===0)this.index=1;
			else if(this.index===1)this.index=0;
		}
		this.y+=this.speed;
		//若飞出下边界或炸毁了，则可以删除了
		if(this.y>=canvasHeight){ //飞出下边界
			this.removable = true;
		}
	}
}

//所有敌机组成的列表
var enemyList;
function EnemyList(){
	this.arr = []; //保存所有的敌机
	this.add = function(enemy){ //增加新敌机
		this.arr.push(enemy);
	}
	this.remove = function(i){ //删除指定的敌机
		this.arr.splice(i,1);
	}
	this.draw = function(){  //绘制所有的敌机
		for(var i in this.arr){
			this.arr[i].draw();
		}
	}
	this.move = function(){  //让所有的敌机移动
		this.generate(); //生成新的敌人
		for(var i in this.arr){
			var e = this.arr[i];
			e.move();
			if(e.removable){
				this.remove(i);
			}
		}
	}
	//随机生成一个敌机
	this.generate = function(){
		/*敌机生成的要求：
		*何时生成敌机是随机的，不是定时或者连续的
		*小号敌机的概率最大，中号其次，大号最少
		*思路：0~199随机数  小号0/1/2/3/4/5  中号6/7/8  大号9  其它值不生成敌机
		*进一步扩展：可以将6/9/10设置为变量，以增加游戏难度
		*/
		var num = Math.floor( Math.random()*200 );
		if(num<6){
			this.add( new Enemy1(imgEnemy1) );
		}else if(num<9){
			this.add( new Enemy2(imgEnemy2) );
		}else if(num<10){
			this.add( new Enemy3(imgEnemy3) );
		}
	}
}

//当鼠标在画布上移动时，修改英雄机位置
//var counter=0;
canvas.onmousemove=function(event){
	if(curPhase===PHASE_PLAY){
		var x=event.offsetX;//鼠标相对于画布左上角的偏移量
		var y=event.offsetY;
		
//		counter++;
//		console.log(counter)
//		if(counter%10==0){
		var nowWidthX=x-imgHero[0].width/2;
		var nowHeightY=y-imgHero[0].height/2;
			hero.x=x-imgHero[0].width/2;
			hero.y=y-imgHero[0].height/2;
//		}
	}
}
/***阶段5:游戏暂停***/

/***阶段6:游戏结束***/

//整个游戏的主引擎——定时器
function startEngine(){
	setInterval(function(){
		sky.draw();
		sky.move();
		switch (curPhase){
			case PHASE_READY:
				logo.draw();
				break;
			case PHASE_LOADING:
				loading.draw();
				loading.move();
				break;
			case PHASE_PLAY:
				hero.draw();
				hero.move();
				bulletList.draw();
				bulletList.move();
				enemyList.draw();
				enemyList.move();
				break;
			case PHASE_PAUSE:
				break;
			case PHASE_GAMEOVER:
				break;	
		}
	},42)//每一秒绘制24次
}
