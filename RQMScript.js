$(document).ready(function(){
  
  //beautiful code to customize font-size on different screens (not myhttp://www.outlier.com/blog/responsive-font-size-truly-responsive-jquery)
  
    var fontSize = $(window).width()/50;
	$('body').css('font-size', fontSize);
	
	$(window).resize(function() {
		var fontSize = $(window).width()/50;
		$('body').css('font-size', fontSize);
	});

    var oldQuote = -1;
    var randomQuote;
    var randomAuthor;

    var bigBangQuoteEng = ["I'm not insane. My mother had me tested!", "Because there's only one mind expanding drug that this man enjoys, and that's called school.", "I can't think of a single thing I wouldn't say to someone's face.", "Bazinga!", "I never said that you are not good at what you do. It's just that what you do is not worth doing.", "I often forget other people have limitations. It's so sad...", "I'm a princess and this is my tiara!", "Because, you know... that's kind of my life right now.", "Are you saying, you want to spank me?", "Everything has to do with sex.", "I'm seducing you.", "..it is understandable but not excusable mistake.", "I'm a physicist. I have a working knowledge of the entire universe and everything it contains"];

    var bigBangAuthorEng = ["-Sheldon Cooper", "-Sheldon Cooper", "-Sheldon Cooper", "-Sheldon Cooper", "-Sheldon Cooper", "-Sheldon Cooper", "-Amy Farrah Fowler", "-Amy Farrah Fowler", "-Amy Farrah Fowler", "-Leslie Winkle", "-Leslie Winkle", "-Sheldon Cooper", "-Sheldon Cooper"];
  
    var philosophyQuoteEng = ["You are never to old to set another goal, or to dream a new dream", "Keep company only with people who uplift you", "Strong minds discuss ideas, average minds discuss events, weak minds discuss people"];

    var philosophyAuthorEng = ["-Aristotel", "-Epictetus", "-Socrates"];
  
    var positiveQuoteEng = ["Forget the mistake. Remember the lesson.", "The mind is everything. What you think you become", "Believe you can and you're halfway there"];

    var positiveAuthorEng = ["@lisamessenger", "-Buddha", "-T. Rosevelt"];
  
    var ecoQuoteEng = ["The Earth is what we all have in common", "The best time to plant a tree was 20 years ago. The next best time is today"];
     
    var ecoAuthorEng = ["-Wendell Berry", "-Chinese Proverb" ];  

  // reset all checked checkboxes

    $('#resetAll').click(function () {
        document.getElementById('bigBang').checked = false;
        document.getElementById('phil').checked = false;
        document.getElementById('positive').checked = false;
        document.getElementById('eco').checked = false;
        }
    );
      
//get random Quote
    function newQuote () {
        var quoteChecked = [];
        var authorChecked = [];
    //alert if all checkboxes are unchecked
        if ($('#bigBang').prop('checked') == false && $('#phil').prop('checked') == false && $('#positive').prop('checked') == false && $('#eco').prop('checked') == false) {
            $('.quote').text('Please select at least one Topic');
            $('.author').text('ATENTION!').css('color', 'red');
        } 
        else {
    // generate quote according to choosen Topics
    
            if ($('#bigBang').prop('checked') == true)  {
                quoteChecked = quoteChecked.concat(bigBangQuoteEng);
                authorChecked = authorChecked.concat(bigBangAuthorEng);
            }
    
            if ($('#phil').prop('checked') == true) {
                quoteChecked = quoteChecked.concat(philosophyQuoteEng);
                authorChecked = authorChecked.concat(philosophyAuthorEng);
            }
    
            if ($('#positive').prop ('checked') == true) {
                quoteChecked = quoteChecked.concat(positiveQuoteEng);
                authorChecked = authorChecked.concat(positiveAuthorEng);
            }
    
            if ($('#eco').prop ('checked') == true) {
                quoteChecked = quoteChecked.concat(ecoQuoteEng);
                authorChecked = authorChecked.concat(ecoAuthorEng);
            }
    
        // Generation of random number and PREVENTION OF ITS REPETITION:
  
            var randomNum = oldQuote; // first necessary repetition
  
        // generation of new random numer
            while ( randomNum == oldQuote) {     
                randomNum = Math.floor(Math.random()*quoteChecked.length); 
            } 
        
            oldQuote = randomNum; //restore to prevent repetition
    
        // create random quote with author:
            randomQuote = quoteChecked [randomNum];  
            randomAuthor = authorChecked [randomNum];
   
        // display quote and author:
    
            $('.quote').text (randomQuote);
            $('.author').text (randomAuthor); 
        } 
        
    // highlight with red if all checkboxes are unchecked
        if ($('#bigBang').prop('checked') == false && $('#phil').prop('checked') == false && $('#positive').prop('checked') == false && $('#eco').prop('checked') == false) {
            $('.quote').css('color', 'red');
            $('.author').css('color', 'red');
        } 
        else {
            $('.quote').css('color', 'black');
            $('.author').css('color', 'black');
        }   
    }
   
    $("#newQuote").click(function() {
        newQuote();
    });
  
    $('#twitter').click (function() {
        window.open('https://twitter.com/intent/tweet?text=' + randomQuote + " " + randomAuthor)
    });
});
