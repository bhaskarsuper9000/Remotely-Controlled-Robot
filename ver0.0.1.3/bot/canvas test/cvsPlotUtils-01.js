/*=======================================================
  Filename: cvsPlotUtils-01.js
  Rev 1
  By: A.R.Collins
  Description: Graph Plotting Support Utilities
  Based on c routines written for signal
  processing work.
  License: Released into the public domain
  latest version at
  <http://www/arc.id.au/>


  Date    Description                               |By
  ------------------------------------------------------
  01Nov09 Renamed from graphicsUtils-12.js           ARC
  07Nov09 Renamed again from graphPlotUtils-01.js
          Converted to support CvsGraphCtx           ARC
 =======================================================*/

  function toEngFixed(val, decPlaces)      // rounds to X dec places and no stripping of 0s
  {
    var unit = "pnum kMG";
    var man, pwr;
    var expt = 0;
    var str = "";

    if ((decPlaces==undefined)||(decPlaces<0)||(decPlaces>10))
      decPlaces = 2;
    man = 0.0;
    if (Math.abs(val)>1.0E-12)
    {
      pwr = Math.log(Math.abs(val))/(3.0*Math.LN10);
      expt = Math.floor(pwr);
      man = val/Math.pow(1000.0, expt);
      expt *= 3;
    }
    // now force round to decPlaces
    str = man.toFixed(decPlaces);
    // now add the symbol for the exponent
    return str+unit.charAt(expt/3+4);
  }

  function toEngPrec(val, sigFigs)      // rounds to X significant figures and no stripping of 0s
  {
    var unit = "pnum kMG";
    var man, pwr;
    var expt = 0;
    var str = "";
    var title = "";

    man = 0.0;
    if (Math.abs(val)>1.0E-12)
    {
      pwr = Math.log(Math.abs(val))/(3.0*Math.LN10);
      expt = Math.floor(pwr);
      man = val/Math.pow(1000.0, expt);
      expt *= 3;
    }
    str = man.toPrecision(sigFigs);
    // now add the symbol for the exponent
     return str+unit.charAt(expt/3+4);
  }

  function getMax(A)     // find the maximum value in an array
  {
    var max = A[0];

    for (var i=1; i<A.length; i++)
    {
      if (A[i]>max)
        max = A[i];
    }
    return max;
  }

  function getMin(A)
  {
    var min = A[0];

    for (var i=1; i<A.length; i++)
    {
      if (A[i]<min)
        min = A[i];
    }
    return min;
  }

  function getMaxAbs(Ar, Ai)
  {
    var max = 0;
    var temp;

    for (var i=0; i<Ar.length; i++)
    {
      temp = Math.abs(Ar[i]);
      if (temp>max)
        max = temp;
    }
    for (var i=0; i<Ai.length; i++)
    {
      temp = Math.abs(Ai[i]);
      if (temp>max)
        max = temp;
    }
    return max;
  }

  /* find first value in 2,4,8,20, ... past val
     this max may then be divided by 4 and have stepVal 1,2,5,10 ... */
  function scale248max(val)
  {
    var t = 1E-6;
    var pwr, exp, h, nxt;
    for(pwr=-6; pwr<=6; pwr+=3)
    {
      for(exp=1; exp<1000; exp*=10)
      {
        for(h=0; h<3; h++)
        {
          nxt = 2*Math.pow(2, h)*exp*Math.pow(10, pwr); // generates 2,4,8, 20 ... 800
          if ((val < 0) && (-nxt < val))
            return -t;
          t = nxt
          if ((val >= 0) && (t >= val))
            return t;
        }
      }
    }
    return t*Math.pow(10, pwr-3);
  }

  function scale125max(val)
  {
    var t = 1E-6;
    var pwr, exp, h, nxt;
    for(pwr=-6; pwr<=6; pwr+=3)
    {
      for(exp=1; exp<1000; exp*=10)
      {
        for(h=0; h<3; h++)
        {
          nxt = (h*h+1)*exp*Math.pow(10, pwr); // generates 1,2,5,10 ... 500
          if ((val < 0) && (-nxt < val))
            return -t;
          t = nxt
          if ((val >= 0) && (t >= val))
            return t;
        }
      }
    }
    return t*Math.pow(10, pwr-3);
  }

  /* find first value in 1, 2.5, 5, 10, ... past val
     this max may then be divided by 5 or 10 steps and have stepVal 1,2,5,10 ... */
  function scale125step(val)
  {
    var t = 1E-6;
    var pwr, exp, h, nxt;
    for(pwr=-6; pwr<=6; pwr+=3)
    {
      for(exp=1; exp<1000; exp*=10)
      {
        for(h=1; h<4; h++)
        {
          nxt = ((h*h+1)/2)*exp*Math.pow(10, pwr); // generates 1,2.5,5,10,25,50 ... 500
          if ((val < 0) && (-nxt < val))
            return -t;
          t = nxt
          if ((val >= 0) && (t >= val))
            return t;
        }
      }
    }
    return t*Math.pow(10, pwr-3);
  }

  function scaleLog(val)
  {
    for (var t=-200; t<=200; t+=10)
    {
      if (t>val)
        return t;
    }
    return t;
  }

  CvsGraphCtx.prototype.drawAxes = function(xOrg, yOrg, xMin, xMax, yMin, yMax, xMinTic, yMinTic, xMajTic, yMajTic)
  {
    var x, y;
    // make the length of tick marks 1% of the screen width
    var xTicLen = -0.007*this.vpW/this.yscl;
    var yTicLen = 0.007*this.vpW/this.xscl;

    var xTics = new AxisTicsManual(xMin, xMax, xMinTic, xMajTic);
    var yTics = new AxisTicsManual(yMin, yMax, yMinTic, yMajTic);

    // draw axes
    this.move(xMin, yOrg);
    this.line(xMax, yOrg);   // X axis
    this.move(xOrg, yMin);
    this.line(xOrg, yMax);   // Y axis

    // X axis tick marks
    if (xTics.ticStep)
    {
      for(x=xTics.tic1; x<=xMax; x+=xTics.ticStep)
      {
        this.move(x, yOrg - xTicLen);
        this.line(x, yOrg + xTicLen);
      }
    }
    // Y axis tick marks
    if (yTics.ticStep)
    {
      for(y=yTics.tic1; y<=yMax; y+=yTics.ticStep)
      {
        this.move(xOrg - yTicLen, y);
        this.line(xOrg + yTicLen, y);
      }
    }

    // major ticks X axis
    if (xTics.lblStep)
    {
      for(x=xTics.lbl1; x<=xMax; x+=xTics.lblStep)
      {
        this.move(x, yOrg - 1.5*xTicLen);
        this.line(x, yOrg + 1.5*xTicLen);
      }
    }
    // major ticks Y axis
    if (yTics.lblStep)
    {
      for(y=yTics.lbl1; y<=yMax; y+=yTics.lblStep)
      {
        this.move(xOrg - 1.5*yTicLen, y);
        this.line(xOrg + 1.5*yTicLen, y);
      }
    }

    // now label the axes
    var xOfs = 4*xTicLen;
    var yOfs = 4*yTicLen;
  	var lorg;

		if (xTics.lblStep)
		{
    	// X axis, decide whether to label above or below X axis
  		if (((yOrg<yMin+0.55*(yMax-yMin)) && (this.yscl<0))||((yOrg>yMin+0.45*(yMax-yMin)) && !(this.yscl<0)))
    	{
  			// x axis on bottom half of screen
    		xOfs = -xOfs;
    		lorg = 2;
    	}
    	else
    	{
    		lorg = 8;
    	}
    	for (x = xTics.lbl1; x<=xMax; x += xTics.lblStep)
    	{
  			// skip label at the origin if it would be on the other axis
  			if ((x==xOrg)&&(yOrg>yMin)&&(yOrg<yMax))
  				continue;
    		this.label(engNotation(x), x, yOrg+xOfs, lorg);
    	}
    }

		if (yTics.lblStep)
		{
    	// Y axis, decide whether to label to right or left of Y axis
    	if (((xOrg<xMin+0.5*(xMax-xMin)) && (this.xscl>0))||((xOrg>xMin+0.5*(xMax-xMin)) && !(this.xscl>0)))
    	{
    		// y axis on left half of screen
    		yOfs = -yOfs;
    		lorg = 6;
    	}
    	else
    	{
    		lorg = 4;
    	}
    	for (y = yTics.lbl1; y<=yMax; y += yTics.lblStep)
    	{
  			// skip label at the origin if it would be on the other axis
  			if ((y==yOrg)&&(xOrg>xMin)&&(xOrg<xMax))
  				continue;
    		this.label(engNotation(y), xOrg+yOfs, y, lorg);
    	}
    }
  }

  CvsGraphCtx.prototype.drawBoxAxes = function(xMin, xMax, yMin, yMax, xMn, yMn, xUnits, yUnits, title)
  {
		var x, y;
		var lbl;
  	// make the length of tick marks 1% of the screen width
  	var xTicLen = -0.015*this.vpW/this.yscl;
  	var yTicLen = 0.015*this.vpW/this.xscl;
  	var xOfs = -0.02*this.vpW/this.yscl;
  	var yOfs = 0.02*this.vpW/this.xscl;
		var dx;		// tolerance to handle maths noise
		var dy;

		var xTics = new AxisTicsManual(xMin, xMax, xMn);
		var yTics = new AxisTicsManual(yMin, yMax, yMn);

		// Draw box axes
		this.move(xMin, yMin);
  	this.line(xMin, yMax);
  	this.line(xMax, yMax);
  	this.line(xMax, yMin);
  	this.line(xMin, yMin);

		if (xMn == undefined)
			return;
		dx = 0.01*xTics.ticStep;		// tolerance to handle maths noise
  	for (x=xTics.tic1; x<=xMax+dx; x += xTics.ticStep)
  	{
  		this.move(x, yMin-xTicLen);
 		  this.line(x, yMin);
      if ((x != xMin)&&(x != xMax))        // no dots on the box
      {
       	this.line(x, yMax, "dotted");      // grid lines
      }
  	}
		if (yMn == undefined)
			return;
		dy = 0.01*yTics.ticStep;
  	for (y=yTics.tic1; y<=yMax+dy; y += yTics.ticStep)
  	{
  		this.move(xMin-yTicLen, y);
    	this.line(xMin, y);
      if ((y != yMin)&&(y != yMax))
      {
  		  this.line(xMax, y, "dotted");      // grid lines
      }
  	}

		// Now labels
  	// X axis, label only first and last tic below X axis
		x = xTics.tic1;
		this.label(engNotation(x), x, yMin - xOfs, 1);  // label first tic (lorg=1)
  	while(x+xTics.ticStep <= xMax+dx)
  	{
  		x += xTics.ticStep;
  	}
		this.label(engNotation(x), x, yMin - xOfs, 3);	// label last tic (lorg=3)

		// Y axis, label bottom and top tics to left of Y axis
 		y = yTics.tic1;
  	this.label(engNotation(y), xMin - yOfs, y, 6);  // label bottom tic (lorg=6)
  	while (y + yTics.ticStep <= yMax+dy)
  	{
			y += yTics.ticStep;
  	}
		this.label(engNotation(y), xMin - yOfs, y, 6); // label top tic (lorg=6)

    // x axis label
    if (typeof xUnits == "string")
      lbl = engNotation(xTics.ticStep)+xUnits+"/div";
    else
      lbl = engNotation(xTics.ticStep)+"/div";
    x = xMin+(xMax-xMin)/2
		this.label(lbl, x, yMin - xOfs, 2);  // label in center of x axis (lorg 2)

    // y axis label
    if (typeof yUnits == "string")
      lbl = engNotation(yTics.ticStep)+yUnits;
    else
      lbl = engNotation(yTics.ticStep);
    y = yMin+(yMax-yMin)/2;
		this.label(lbl, xMin - yOfs, y, 9);     // label in center of y axis (lorg 9)
    y = yMin+(yMax-yMin)/2.15;
		this.label("/div", xMin - yOfs, y, 3);  // label just below center of y axis (lorg 3)

    // title
    if (typeof title == "string")
      this.label(title, xMin, yMax + xOfs, 7);
	}

  CvsGraphCtx.prototype.drawXYAxes = function(xOrg, yOrg, xMin, xMax, yMin, yMax, xUnits, yUnits, xLabel, yLabel)
  {
    var xTics = new AxisTicsAuto(xMin, xMax);
    var yTics = new AxisTicsAuto(yMin, yMax);

    var xOfs = -0.07*this.vpW/this.yscl;
    var yOfs = 0.14*this.vpW/this.xscl;
    var lorg;

    this.drawAxes(xOrg, yOrg, xMin, xMax, yMin, yMax, xTics.ticStep, yTics.ticStep, 2*xTics.ticStep, 2*yTics.ticStep);
    var xU = "";
    var yU = "";
    if ((xUnits != undefined)&&(xUnits.length>0))
      xU = "("+xUnits+")";
    if ((yUnits != undefined)&&(yUnits.length>0))
      yU = "("+yUnits+")";

    var xL = "";
    if ((xLabel != undefined)&&(xLabel.length>0))
      xL = xLabel;
    if (((yOrg<yMin+0.55*(yMax-yMin)) && (this.yscl<0))||((yOrg>yMin+0.45*(yMax-yMin)) && !(this.yscl<0)))
    {
      xOfs = -xOfs;
      lorg = (this.xscl>0)? 3: 1;
    }
    else
    {
      lorg = (this.xscl>0)? 9: 7;
    }
    this.label(xL+xU, xMax, yOrg+xOfs, lorg, 0, 13);

    var yL = "";
    if ((yLabel != undefined)&&(yLabel.length>0))
      yL = yLabel;
  	// Y axis, decide whether to label to right or left of Y axis
  	if (((xOrg<xMin+0.5*(xMax-xMin)) && (this.xscl>0))||((xOrg>xMin+0.5*(xMax-xMin)) && !(this.xscl>0)))
  	{
  		// y axis on left half of screen
  		yOfs = -yOfs;
      lorg = (this.yscl<0)? 9: 7;
  	}
  	else
  	{
      lorg = (this.yscl<0)? 3: 1;
  	}
    this.label(yL+yU, xOrg+yOfs, yMax, lorg, 90, 13);
  }

  function AxisTicsManual(xmin, xmax,	xMn, xMj)
	{
    this.tic1 = 0;
    this.ticStep = 0;
    this.lbl1 = 0;
    this.lblStep = 0;
    this.ticScl = 0;     // reserved for future use

		if ((xmin==undefined)||(xmax==undefined)||(xMn==undefined))
			return;

		var dx;		// tolerance for avoiding maths noise

		if (xMn!=0)
		{
			dx = 0.01*xMn;
			this.tic1 = xMn*Math.ceil((xmin-dx)/xMn);
      this.ticStep = xMn;
		}

		if ((xMj!=undefined)&&(xMj>0))
		{
			this.lblStep = this.ticStep*Math.round(xMj/xMn);
			dx = 0.01*xMn;
			this.lbl1 = this.lblStep*Math.ceil((xmin-dx)/this.lblStep);
		}

    // to make all labels have same scale factor calc lastTic and corresponding tag "m kMG" etc
    // calc engnotation for xTic1 exp=xTicScl, tag=xTicTag
    // plot x = xtic1 + n*xTicStep
    // label x/xTicScl+xTicTag
	}

  function AxisTicsAuto(min, max, numTics)   // optional 'numTics' forces the value of numSteps
  {
    this.tic1;
    this.ticStep;
    this.lbl1 = 0;
    this.lblStep = 0;
    this.ticScl = 0;     // reserved for future use

    if (numTics>1)
      this.calcNTics(min, max, numTics);
    else  // auto tick the axis
      this.calcTics(min, max);
  }

/* calcTics(min, max)
 * Calculate the tic mark spacing for graph plotting
 * Given the minimum and maximum values of the axis
 * returns the first, last tic values, the tic spacing and number
 * of ticks.
 * The algorithm gives tic spacing of 1, 2, 5, 10, 20 etc
 * and a number of ticks from ~5 to ~11
 */
  AxisTicsAuto.prototype.calcTics = function(mn, mx)
  {
    var pwr, spanman, stepman;
    var spanexp, stepexp;

    if (mn>=mx)
    {
      alert("Max must be greater than Min!");
      return;
    }
    pwr = Math.log(mx-mn)/Math.LN10;
    if (pwr<0.0)
      spanexp = Math.floor(pwr) - 1;
    else
      spanexp = Math.floor(pwr);
    spanman = (mx-mn)/Math.pow(10.0, spanexp);
    if(spanman>=5.5)
    {
      spanexp += 1;
      spanman /= 10.0;
    }
    stepman = 0.5;
    if(spanman<2.2)
      stepman = 0.2;
    if(spanman<1.1)
      stepman = 0.1;
    stepexp = 3*Math.floor(spanexp/3);
    if((spanexp<0)&&(spanexp%3!=0))
      stepexp -= 3;
    stepman = stepman*Math.pow(10.0, (spanexp-stepexp));
    this.ticStep = stepman*Math.pow(10.0, stepexp);
    if(mn>=0.0)
      this.tic1 = (Math.floor((mn/this.ticStep)-0.01)+1)*this.ticStep;   // avoid math noise
    else
      this.tic1 = -Math.floor((-mn/this.ticStep)+0.01)*this.ticStep;   // avoid math noise

/*    var str = "";
    str += "tic1= "+this.tic1+ "\n";
    str += "lastTic= "+this.lastTic+ "\n";
    str += "ticStep= "+this.ticStep+ "\n";
    str += "numSteps= "+this.numSteps;
    alert(str);
*/
  }

  AxisTicsAuto.prototype.calcNTics = function(mn, mx, n)
  {
    if (mn>=mx)
    {
      alert("Max must be greater than Min!");
      return;
    }

    this.tic1 = mn;
    this.ticStep = (mx-mn)/n;
//    this.lastTic = mx;
//    this.numSteps = n+1;         // n steps, n+1 ticks

/*    var str = "";
    str += "ymin="+mn+"  ymax="+mx+"\n";
    str += "tic1= "+this.tic1+ "\n";
    str += "lastTic= "+this.lastTic+ "\n";
    str += "ticStep= "+this.ticStep+ "\n";
    str += "numSteps= "+this.numSteps;
    alert(str);
*/
  }

  function engNotation(val)        // rounds to 2 dec places and strips trailing 0s
  {
    var unit = "pnum kMG";
    var man, pwr;
    var expt = 0;
    var str = "";

    man = 0.0;
    if (Math.abs(val)>1.0E-12)
    {
      pwr = Math.log(Math.abs(val))/(3.0*Math.LN10);
      expt = Math.floor(pwr);
      man = val/Math.pow(1000.0, expt);
      expt *= 3;
    }
    // now force round to decPlaces
    str = man.toFixed(2);
    // now strip trailing 0s
    while (str.charAt(str.length-1)=='0')
      str = str.substring(0,str.length-1);
    if (str.charAt(str.length-1)=='.')
      str = str.substring(0,str.length-1);
    // now add the symbol for the exponent
    if (expt)
      return str+unit.charAt(expt/3+4);
    else
      return str;                   // dont add unnecessary space
  }
