function encode ( str )
{
	var avg = 0 ;

	for ( var i = 0 ; i < str.length ; i++ )
	{
		avg += str.substring ( i , i + 1 ).charCodeAt () ;
	}  

	avg /= str.length ;

	var sum = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ] ;

	for ( var i = 0 ; i < str.length ; i++ )
		sum [ i % 8 ] += Math.abs ( str.substring ( i , i + 1 ).charCodeAt () - avg ) ;

	var ans = "" 

	for ( var i = 0 ; i < 8 ; i++ )
	{
		ans += String.fromCharCode ( sum [ i ] / ( str.length / 8 ) + 48 ) ;
	}

	document.getElementById ( "answer" ).innerHTML = ans ;
}