$(document).ready(function(){
    function hasErrors(errorlist){
        return !!Object.keys(errorlist).length;
    }
        var TurtleWriteTest;
        var errorlist;
        TurtleWriteTest = new TurtleWrite()
        
		errorlist = TurtleWriteTest.validateInput(
					"macro fancyRight (    \n"+
					"	forward(10)    \n"+
					"	left()    \n"+
					"	forward(10)    \n"+
					"	right()  \n"+
					")  \n"+
					"color(white)  \n"+
					"forward(50)  \n"+
					"fancyRight()  \n"+
					"forward(50)"
		);
        assert(!hasErrors(errorlist),'basic macro test failed');
        console.log('Pass test 1');
        


		errorlist = TurtleWriteTest.validateInput(
					"macro fancyRight (    \n"+
					"	forward(10)    \n"+
					"	left()    \n"+
					"	forward(10)    \n"+
					"	right()  \n"+
					")  \n"+
					"color(white)  \n"+
					"forward(50)  \n"+
					"fancyRight())  \n"+
					"forward(50)"
        );
        assert(hasErrors(errorlist) && errorlist[9] == "Invalid basic syntax: fancyRight())",'bad syntax test fail');
        
        
        console.log('Pass test 2');
        
        
		errorlist = TurtleWriteTest.validateInput(
            
					"macro forward (    \n"+
					"	forward(10)    \n"+
					"	left()    \n"+
					"	forward(10)    \n"+
					"	right()  \n"+
					")  \n"+
					"color(white)  \n"+
					"forward(50)  \n"+
					"fancyRight()  \n"+
					"forward(50)"
        );
        
        assert(hasErrors(errorlist) && errorlist[1] == "Macro is reserve word: forward",'reserve word match fail');
        console.log('Pass test 3');
        
        
		errorlist = TurtleWriteTest.validateInput(
            
            "macro forward (    \n"+
            "	forward(10)    \n"+
            "	left()    \n"+
            "	forward(10)    \n"+
            "	right()  \n"+
            "color(white)  \n"+
            "forward(50)  \n"+
            "fancyRight()  \n"+
            "forward(50)"
        );
        assert(hasErrors(errorlist) && errorlist[9] == "Need an ending parenthesis " ,'trailing parenthesis fail');
        console.log('Pass test 4');

       // console.log(errorlist);
        
});