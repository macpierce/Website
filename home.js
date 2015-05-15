//Mac Pierce 2015, my first ever p5.js project.

var rsize;
var fillPos = 10;
var mSense = 5;
var tSize;
var ftSize;

var img;
var work;
var blog;
var contact;
var foot;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	
	noStroke();
	noCursor();
	
	img = createImg("h_resources/mp.png");
	
	work = createDiv("<a href='work.html'><h3>work</h3></a>");
	
	blog = createDiv("<a href='http://blog.macpierce.com' target='_blank' ><h3>blog</h3></a>");
	
	contact = createDiv("<a href='about.html'><h3>contact</h3></a>");
	
	foot =  createDiv("<p>Mac Pierce 2015</p>");
	
	scaleAll();
}

function draw()
{
	for(var x = 0; x <= width; x += rsize)
	{
		for(var y = 0; y <= height; y += rsize)
		{
			push();
			if(dist(mouseX,mouseY,x,y) <= rsize * mSense)
			{
				fill(random(fillPos, (-dist(mouseX,mouseY,x,y)) + (rsize * mSense) + fillPos));
			}
			else
			{
				fill(random(fillPos));
			}
			rect(x,y,rsize,rsize);
			pop();
		}
	}
}

function windowResized() 
{
	resizeCanvas(windowWidth, windowHeight);
    scaleAll();
}

function scaleAll()
{
    if(width < height)
	{
		rsize = height/100;
	}
	else
	{
		rsize = width/100;
	}
	
	tSize = nf((rsize * 2), 0, 2, 0) + "px";
	ftSize = nf((rsize), 0, 2, 0) + "px";
	
	img.size(rsize * 20, rsize * 20);
	img.position((width/2 - rsize * 10), (height/2 - rsize * 20));
	work.size(rsize * 20, rsize * 20);
	work.position((width/2 - rsize * 15), (height/2 + rsize * 3));
	work.style("font-size", tSize)
	blog.size(rsize * 20, rsize * 20);
	blog.position((width/2 - rsize * 2), (height/2 + rsize * 3));
	blog.style("font-size", tSize)
	contact.size(rsize * 20, rsize * 20);
	contact.position((width/2 + rsize * 9), (height/2 + rsize * 3));
	contact.style("font-size", tSize)
	foot.size(rsize * 10, rsize * 10);
	foot.position((width/2 - rsize * 4), (height/2 + rsize * 20));
	foot.style("font-size", ftSize)
}
