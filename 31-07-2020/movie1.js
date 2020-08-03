class movie{
	
constructor(title, Studio, rating='PG'){
				
	this.title=title;
			
	this.Studio= Studio;
			
	this.rating=rating;
				
	
			}

	
static arr1() {
			 	
let arr=[];
			 
	for(let i=0; i<arguments.length; i++){
			 		
arr.push(arguments[i]);
  }

			 	
return arr;

  }
  
static arr3(){
  	
let arr=[];
 
 	for(let i=0; i<arguments.length; i++){
  		          
  if(arguments[i].rating==='PG'){
  		            	
arr.push(arguments[i]);
  		      
      }
			
}
	
 return arr;
 
 }

 
  
}


let  slnk = new movie('slnk', 'abc',8);

let cde= new movie ('cde', 'def');

let fghi = new movie ('fghi', 'jkl');

let casino_Royale = new movie ('casino_Royale','Eon productions','PG13');
let moviearr= movie.arr1(slnk,cde,fghi,casino_Royale);

let ratingarr= movie.arr3(slnk,cde,fghi,casino_Royale);


console.log(moviearr);

console.log(ratingarr);