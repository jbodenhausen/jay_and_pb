/*----------------------------------------------------------------
* File: showdrip.js
*
* Summary: Contains the main javascript code for the showdrip 
*          website.
----------------------------------------------------------------*/
/*----------------------------------------------------------------
GLOBAL VARIABLES
----------------------------------------------------------------*/
var NUM_GEN_SEARCH_FIELDS = 3;
var NUM_VENUE_SEARCH_FIELDS = 1;

var glbl_num_search_fields;

var ShowItem = makeStruct("band date time");

//Alberta Rose Theater Shows
var ar_shows= [ new ShowItem("Seth Glier","04/03/12", "8:00PM"),
                new ShowItem("Vagabond Opera","04/06/12", "8:00PM"),
                new ShowItem("Chilly Gonzales","04/09/12", "9:00PM"),
                new ShowItem("Glen Phillips","04/12/12", "8:00PM"),
                new ShowItem("Lewi Longmire Band","04/13/12", "8:00PM"),
                new ShowItem("Ramblin' Jack Elliott","04/16/12", "8:00PM")
              ];
              
//Aladdin Theater Shows              
var at_shows=[ new ShowItem("Uncle Kracker","04/06/12","8:00PM"),
               new ShowItem("The Motet","04/07/12","9:00PM"),
               new ShowItem("Heartless Bastards","04/08/12","8:00PM"),
               new ShowItem("Arlo Guthrie","04/11/12","8:00PM"),
               new ShowItem("Lacuna Coil","04/13/12","7:30PM"),
               new ShowItem("Hayes Carll","04/14/12","8:00PM ")
             ];           

//Crystal Ballroom Shows             
var cb_shows=[ new ShowItem("Gotye","04/09/12","9:00PM"),	     
               new ShowItem("Jeff Mangum","04/18/12","8:30PM")               
             ];
             
//Doug Fir Shows             
var df_shows=[ new ShowItem("Bowerbirds","04/04/12","9:00PM"),
               new ShowItem("Swervedriver","04/05/12","9:00PM"),	      
               new ShowItem("fIREHOSE","04/06/12","9:00PM"),
               new ShowItem("Fanfarlo","04/07/12","9:00PM"),
               new ShowItem("Chairlift","04/08/12","9:00PM"),
               new ShowItem("Hanni","El Khatib 04/09/12","9:00PM"),
               new ShowItem("The Yards","04/10/12","9:00PM"),
               new ShowItem("Left Coast Country","04/11/12","9:00PM"),
               new ShowItem("First Aid Kit","04/12/12","9:00PM"), 
               new ShowItem("Portland Cello Project","04/13/12","9:00PM")
             ];

//Hawthorne Theater Shows             
var ht_shows=[ new ShowItem("3 Inches of Blood","04/03/12","7:00PM"),
               new ShowItem("Rachel Brooke","04/04/12","7:30PM"),
               new ShowItem("Deuce","04/10/12","4:45PM")
             ];             

//Mississippi Studios Shows           
var ms_shows=[ new ShowItem("The Wedding Present","04/07/12","9:00PM"),
               new ShowItem("Oberhofer","04/09/12","8:30PM"),
               new ShowItem("Bear In Heaven","04/12/12","9:00PM")               
             ];
             
//Roseland Shows
var rl_shows=[ new ShowItem("Tyga","04/03/12","8:00PM"),
               new ShowItem("Young The Giant","04/05/12","8:00PM"),
               new ShowItem("Young The Giant","04/06/12","8:00PM"),
               new ShowItem("Sleigh Bells","04/07/12","9:00PM"),
               new ShowItem("James","04/09/12","7:00PM"),
               new ShowItem("Social Distortion","04/10/12","8:00PM"),
               new ShowItem("Miike Snow","04/11/12","8:00PM"),
               new ShowItem("Social Distortion","04/12/12","8:00PM")
             ];             
             
//Wonder Ballroom Shows            
var wb_shows=[ new ShowItem("The Polyphonic Spree","04/05/12","9:00PM"),
               new ShowItem("Cults","04/06/12","9:00PM"),
               new ShowItem("Housse De Racket","04/07/12","9:00PM"),
               new ShowItem("Kasabian","04/11/12", "8:00PM")
             ];
             
//Alberta Rose description
var ar_description = "Located in the heart of the eclectic Alberta Arts District, the Alberta Rose \
                    originally opened as a motion picture house in 1927 and showed films until it closed \
                    in 1978. The theatre has 300 fixed seats and radiates the serene feeling of a \
                    Spanish-Colonial courtyard. The Alberta Rose is a mid-size, seated listening room \
                    where the audience can enjoy excellent lines of sight, outstanding acoustics and \
                    where every seat feels close to the stage and the artist.";

//Aladdin Theater description
var at_description = "The Aladdin Theater began as Geller's Theatre, a vaudeville house in the late 20's playing host \
                    to the likes of Jack Benny. Through the middle decades of the century it served as a family movie emporium, \
                    and in the 70's and 80's it was a porn institution (the number one exhibitor of the X-rated classic Deep \
                    Throat). In late 1993 Steve Reischman and Sally Custer (then of promotions company Showman, Inc.) renovated the\
                    old hall into the shining light of Portland music venues.";
                    
//Crystal Ballroom description
var cb_description = "The Crystal Ballroom enjoys national recognition for a reason. No local venue, and \
                     indeed few in the nation, can challenge this elegant ballroom's 90 years as a premier \
                     place to hear live music, dance and have memorable experiences. The hall has seen countless \
                     first loves unfold, police raids, visits by silent screen idols and Beat poets, psychedelic light \
                     shows, narrow escapes from fire, demolition, and neglect, and a listing in the National Register of \
                     Historic Places. Today, it is a vital, thriving McMenamins owned and operated live music palace that \
                     hosts everything from rock 'n' roll and country, to hip-hop and big band swing.</br></br> \
                     While the action on the stage has always thrilled, one thing everyone remembers about the Crystal is \
                     its astounding \"floating\" dance floor. \"Like dancing on clouds,\" is how people describe cutting a \
                     rug here. At the time of its construction, the Crystal's mechanical dance floor (now fully restored to \
                     proper working order) was said to be unique on the Pacific Coast. Today, it may be the only one left in \
                     the United States. You will also appreciate our gorgeous decor: flamboyant wall sconces and light fixtures, \
                     grand paintings and gigantic windows everywhere.";
  
//Doug Fir description  
var df_description = "The Doug Fir Lounge is a restaurant, bar, and music venue in southeast Portland. \
                    The entire facility is designed in a modern log cabin style with warm ambient lighting. \
                    The restaurant is located on the ground level of the building along with a large busy bar, \
                    alcoves with tree stumps for tables and a concrete patio with a fireplace. In the restaurant \
                    you can find a variety of food from standard bar fare on up to more gourmet dishes. Below \
                    the ground level, the Doug Fir conceals a small stage, limited seating, a large space for \
                    standing and another bar. Both bars have a variety of unique libations, local beers, wines, \
                    and standard cocktail selections.</br></br>	\
                    Adjoining the Doug Fir is the super hip Jupiter Hotel which is a great place to crash \
                    after watching your favorite band play late into the night."; 
  
//Hawthorne Theatre description
var ht_description = "The Hawthorne Theatre is located in the hipster mecca of Portland, the Hawthorne neighborhood. \
                    Hawthorne tends to gravitate toward harder genres such as metal, punk, and hip/hop. The theater itself \
                    is divided into two main areas. The back area (21+) has a bar. The front area (all ages) generally has a mosh pit.</br></br> \
                    The adjoining Balcony Bar has a more full service bar than the theater area and some days you might happen upon \
                    a burlesque show there while you're waiting for a drink. Also sharing a building is the unique \
                    chinese restaurant Lucky Strike where you can grab a spicy and delicious pre-show meal.";   
  
//Mississippi Studios description  
var ms_description = "Located in one of Portland&rsquo;s hippest neighborhoods (the Mississippi District) in North Portland is \
                    Mississippi Studios. You can&rsquo;t miss this venue&rsquo;s generically named bar, Bar Bar, as you have to \
                    enter through it just to get into a show (21+). In the stage area there are two levels. The downstairs \
                    section sometimes contains seating (for more mellow shows), but is typically just a large standing \
                    space. Upstairs there is a balcony area that contains both seating and standing areas. The venue contains \
                    additional seating behind the balcony area (no stage views) with vintage couches and decor. Overall, \
                    Mississippi Studios truly maintains the feel of a recording studio. There are viewing windows both \
                    upstairs and down, a show in progress sign (that actually lights when a show is in progress), double \
                    door entry and a cozy space that feels suited for recording.";                    
  
//Roseland description
var rl_description = "The Roseland Theater complex has for many years been one of America&rsquo;s premier showcase venues.</br></br> \
                    It consists of the Roseland Theater (capacity 1410) which features a large stage, arena-level production, \
                    and superb acoustics and sightlines. It has been the site of live recordings by Little Feat, Foghat, Prince, \
                    and Bob Weir and Ratdog to name a few. Acts such as Bob Dylan, Tina Turner, Miles Davis, Pearl Jam, Jerry \
                    Garcia Band, Bonnie Raitt, and Prince have graced the Roseland stage.</br></br>\
                    The Roseland Theater is generally a standing-room only venue unless otherwise specified.";
  
//Wonder Ballroom description  
var wb_description = "The Wonder Ballroom is concert venue located in Northeast Portland.  This venue occupies \
                    a historic building that is very open inside. The building is rectangular with a stage on \
                    one side, standing space in the middle and a small balcony with limited seating on the \
                    other side.  If the show gets too loud or crazy, the Under Wonder Lounge provides a great \
                    escape for a person to collect themselves over a drink. Next door to the Wonder Ballroom, \
                    Toro Bravo is the perfect place to fill pre or post-concert tapas cravings. Alternatively, \
                    if you&rsquo;re in the mood for something &ldquo;meatier,&rdquo; Russell Street BBQ waits \
                    only a block in the opposite direction.";
 
var VenueItem = makeStruct("name address location phone_num link ext_link venue_image map_image description shows");

//Alberta Rose struct
var ar_struct = new VenueItem("Alberta Rose Theatre", "3000 NE Alberta Street", "Portland, OR", "(503) 719-6065", "./venue.html#Alberta Rose Theatre",
                              "https://www.albertarosetheatre.com", "./images/alberta_rose.gif", "./images/map_alberta_rose.gif", ar_description, ar_shows 
                             );

//Aladdin Theater struct                              
var at_struct = new VenueItem("Aladdin Theater", "3017 SE Milwaukie Ave.", "Portland, OR", "(503) 234-9694", "./venue.html#Aladdin Theater",
                              "http://www.aladdin-theater.com/", "./images/aladdin_theater.gif", "./images/map_aladdin_theater.gif", at_description, at_shows
                             );                              
                        
//Crystal Ballroom struct                        
var cb_struct = new VenueItem("Crystal Ballroom", "1332 W. Burnside", "Portland, OR", "(503) 225-0047", "./venue.html#Crystal Ballroom",
                              "http://www.mcmenamins.com/425-crystal-ballroom-home", "./images/crystal_ballroom.gif", "./images/map_crystal_ballroom.gif", cb_description, cb_shows 
                             );

//Doug Fir struct                             
var df_struct = new VenueItem("Doug Fir", "830 East Burnside Street", "Portland, OR", "(503) 231-9663", "./venue.html#Doug Fir", 
                              "http://www.dougfirlounge.com", "./images/doug_fir.gif", "./images/map_doug_fir.gif", df_description, df_shows
                             );

//Hawthorne Theater struct                              
var ht_struct = new VenueItem("Hawthorne Theatre", "1507 SE 39th Ave", "Portland, OR", "(503) 233-7100", "./venue.html#Hawthorne Theatre",
                              "http://www.hawthornetheater.com/", "./images/hawthorne_theatre.gif", "./images/map_hawthorne_theatre.gif", ht_description, ht_shows
                             );
                          
//Mississippi Studios struct                          
var ms_struct = new VenueItem("Mississippi Studios", "3939 N Mississippi Ave", "Portland, OR", "(503) 288-3895", "./venue.html#Mississippi Studios", 
                              "http://www.mississippistudios.com", "./images/ms.gif", "./images/map_ms.gif", ms_description, ms_shows
                             );
                            
//Roseland struct                            
var rl_struct = new VenueItem("Roseland Theater", "8 NW 6th Ave", "Portland, OR", "(503)224-8499", "./venue.html#Roseland Theater",
                              "http://www.roselandpdx.com", "./images/roseland.gif", "./images/map_roseland.gif", rl_description, rl_shows
                             );                              

//Wonder Ballroom struct                             
var wb_struct = new VenueItem("Wonder Ballroom", "128 Northeast Russell Street", "Portland, OR", "(503) 493-0371", "./venue.html#Wonder Ballroom", 
                              "http://www.wonderballroom.com", "./images/wonder.gif", "./images/map_wonder.gif", wb_description, wb_shows
                             );

var all_structs = [ ar_struct, at_struct, cb_struct, df_struct, 
                    ht_struct, ms_struct, rl_struct, wb_struct ];

/*----------------------------------------------------------------
FUNCTIONS
----------------------------------------------------------------*/
/*----------------------------------------------------------------
Function to make data structures for venues. Currently not 
connected to a database so this holds the only search data.
----------------------------------------------------------------*/
function makeStruct(data_fields) {
  var data_fields = data_fields.split(' ');
  var count = data_fields.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[data_fields[i]] = arguments[i];
    }
  }
  return constructor;
}

/*----------------------------------------------------------------
Function to add selected fields to the favorites list
----------------------------------------------------------------*/
function addToFavorites()
{   
var count;
var cur_selected;
var value;
        
//Go through all selected venues in the venue list        
$("#all_venues_list option:selected").each(function(){
    cur_selected =  $(this).html();
    value = $(this).val();    
    count=0;
    
    //If the favorites list is empty just append the selected option
    if( $("#fav_venues_list option").length == 0 )
        {
        $("#fav_venues_list").append("<option value=\"" + value + "\">" + cur_selected + "</option>");
        }
    //Otherwise check if to make sure there is not a duplicate and insert 
    //in alphabetical order if no duplicates
    else
        {        
        $("#fav_venues_list option").each(function(){           
            if( $(this).html() == cur_selected )
                {                       
                //Return false to break
                return false;
                }
             else if( $(this).html() > cur_selected )
                {                
                $(this).before("<option value=\"" + value + "\">" + cur_selected + "</option>");
                //Return false to break
                return false;
                }
            else if( count == $("#fav_venues_list option").length - 1 )
                {
                $(this).after("<option value=\"" + value + "\">" + cur_selected + "</option>");
                }
            
            count = count + 1;
            });
        }  
    }); 
}

/*----------------------------------------------------------------
Build a string of table contents of all show data
----------------------------------------------------------------*/
function buildResultsTable( is_venue_search )
{
var cur_show_data;
var cur_venue_data;
var tmp_str = "";

tmp_str="";

//Set up caption and table header
tmp_str += "<caption>Search results for \'" + $("#search_string").val() + "\'</caption>\n";

//Add header for general search
if( is_venue_search )
    {
    tmp_str += "<tr><th>Venue</th></tr>\n"
    }
else
    {
    tmp_str += "<tr><th>Performer</th><th>Date</th><th>Time</th><th>Venue</th><th>City</th></tr>\n";
    }

//Loop through all venues and shows constructing a table with all
for( var ven_idx=0; ven_idx < all_structs.length; ven_idx++ )
    {    
    cur_venue_data = all_structs[ ven_idx ];  
        
    //If performing a venue search create venue table based on the venue loop only
    if( is_venue_search )
        {
        tmp_str+="<tr><td class='venue'><a class='searchable' href=\"" + cur_venue_data.link + "\">" + cur_venue_data.name + "</a></td>";							
        tmp_str+="</tr>";  
        continue;
        }
    
    //Loop through all shows for a specific venue
    for( var show_idx=0; show_idx < cur_venue_data.shows.length; show_idx++ )
        {          
        cur_show_data=cur_venue_data.shows[ show_idx ];
           
        //If performing a general search create a table with all music data
        if( !is_venue_search )
            {
            //Format the row with all necessary data and add it to the table
            tmp_str+="<tr><td class='band searchable'>" + cur_show_data.band + "</td>";
            tmp_str+="<td>" + cur_show_data.date + "</td>";
            tmp_str+="<td>" + cur_show_data.time + "</td>";
            tmp_str+="<td class='venue'><a class='searchable' href=\"" + cur_venue_data.link + "\">" + cur_venue_data.name + "</a></td>";
            tmp_str+="<td class='location searchable'>" + cur_venue_data.location + "</td>";
            tmp_str+="</tr>\n";                   
            }
        }    
    }    
    
return tmp_str;
}


/*----------------------------------------------------------------
Function to build settings option list.
----------------------------------------------------------------*/        
function buildSettingsOptions()
{
var tmp_str;

//Loop through all venues and shows constructing a table with all
for( var ven_idx=0; ven_idx < all_structs.length; ven_idx++ )
    {    
    tmp_str+="<option>" + all_structs[ ven_idx ].name + "</option>\n";
    }
    
return tmp_str;
}
        
/*----------------------------------------------------------------
Search through table to build search results
----------------------------------------------------------------*/
function showResultsTable( is_venue_search )
{
var cnt=0;
var found=false;
var num_found=0;
var orig_text;
var rg;
var search_text;
var search_url;

//Clear inner html
$("#results_table").html("");

//Fill with table string built
$("#results_table").append( buildResultsTable(is_venue_search) );
   
//Search for string and show matches, hide other results
search_text = $('#search_string').val();
rg = new RegExp(search_text,'i');

//Change the page to the selected link when clicked and reload
//This will in turn cause the code to notice that there
//is a hash while loading and load the correct page
$("table").on("click", "a.searchable", function() {
    window.location.hash = "#" + $(this).text();
    window.location.reload(true);
    });

$(".searchable").each(function(){
    //Search for the regular expression in the searchable string
    idx = $.trim($(this).html()).search(rg);
    
    //If the value for this row contains a match and the search string isn't empty    
    if( search_text != '' && idx != -1 ) 
        {
        orig_text = $(this).html().substr( idx, search_text.length );
        found=true;
        num_found++;
        $(this).html( $(this).html().replace( rg, "<span style=\"background-color:#FCF\">" + orig_text + "</span>"  ) );
        }
        
    //If all search fields have been searched
    if( ( cnt % glbl_num_search_fields ) == glbl_num_search_fields - 1 )
        {
        //Hide table data and row if not found, otherwise, allow them to be shown
        if( !found )
            {            
            $(this).closest(".band,.location,.venue").parent().css('display', 'none');
            $(this).closest(".band,.location,.venue").css('display', 'none');
            }
        else
            {
            $(this).closest(".band,.location,.venue").parent().css('display', '');
            $(this).closest(".band,.location,.venue").css('display', '');
            found=false;
            }
        }     	
        
    cnt=cnt+1;
    });   

 //If no results were found hide the table and report no results found.
 //Otherwise, show the table and set the color for each row.
 if( num_found == 0 )
    {
    $("th").css('display','none');
    
    //Display no results text if search string is not empty
    search_text==""?$("caption").html(""):$("caption").html("No results found for \"" + search_text +"\".</br></br>" );
    
    $("caption").append("The site isn't hooked up to a database yet, like it will be in full awesomeness. There will be more results eventually so hold tight.");
    }
 else
    {
    $("#results_table").css('display',''); 
    
    //Attach row color to odd rows
    $("tr:visible:odd").addClass("row_color");
    }
}

/*----------------------------------------------------------------
Load page specially for search results/selected venue
----------------------------------------------------------------*/
function specialLoad()
{
var hash_val;
var venue_data;

hash_val = window.location.hash;

if( window.location.pathname.indexOf( "venue.html" ) != -1 )
    {        
    //Loop through all venues and shows constructing a table with all
    for( var ven_idx=0; ven_idx < all_structs.length; ven_idx++ )
        {            
        venue_data = all_structs[ ven_idx ];
                
        if( venue_data.name == hash_val.slice( 1 ) )
            {                                    
            //Populate venue info section
            $("#venue_name").html(venue_data.name);            
            $("#venue_image").attr("src", venue_data.venue_image);
            $("#venue_image").attr("alt", "Image of " + venue_data.name);
            $("#map_image").attr("src", venue_data.map_image);
            $("#map_image").attr("alt", "Map of " + venue_data.name);
            $("#venue_address").html(venue_data.address);
            $("#venue_city").html(venue_data.location);
            $("#venue_phone").html(venue_data.phone_num);
            $("#venue_website").html(venue_data.ext_link.slice(7));
            $("#venue_website").attr("href", venue_data.ext_link);
            $("#venue_description").html(venue_data.description);   

            $("#venue_page_area").css('display', 'inline');            
            break;
            }
        }
    }
}

/*----------------------------------------------------------------
JQuery functions
----------------------------------------------------------------*/
$(document).ready(function()
{
    /*----------------------------------------------------------------
    Make sure that the year text is current
    ----------------------------------------------------------------*/
    var d=new Date();
    $("#year").html("Showdrip " + d.getFullYear());

    /*----------------------------------------------------------------
    If the URL contains a '#' character, will need to load page specially
    ----------------------------------------------------------------*/
    if( window.location.hash )
        { 
        specialLoad();
        } 
        
    /*----------------------------------------------------------------
    If on the settings page, dynamically populate the venue list
    ----------------------------------------------------------------*/
    if( window.location.pathname.indexOf("settings.html") != -1 )
        {
	    $("#all_venues_list").html("");
        $("#all_venues_list").append( buildSettingsOptions() );
        }
        
    /*----------------------------------------------------------------
    Prevent clicks on text input fields from deselecting text
    ----------------------------------------------------------------*/
    $("input:text").mouseup(function(e){
            e.preventDefault();
        });
        
    /*----------------------------------------------------------------
    Select all text when text box selected
    ----------------------------------------------------------------*/
    $("input:text").focus(function(){
        $(this).select();    
        });
        
    /*----------------------------------------------------------------
    Make buttons appear clicked on mousedown event
    ----------------------------------------------------------------*/
    $("button").on("mousedown", function(){
        $(this).css('border-style', 'inset' );
        });
        
    /*----------------------------------------------------------------
    Make buttons appear clicked on mousedown event
    ----------------------------------------------------------------*/
    $("button").on("mouseup mouseleave", function(){
        $(this).css('border-style', 'outset' );
        });
        
    /*----------------------------------------------------------------
    Make enter presses for buttons and divs behave as clicks
    ----------------------------------------------------------------*/    
    $('div, button').keydown(function(e) {         
        if (e.keyCode == 13) {         
            $(this).mousedown();             
        }
    });
    
    $('div, button').keyup(function(e) {         
        if (e.keyCode == 13) { 
            $(this).mouseup();  
            $(this).click();
        }
    });
        
    /*----------------------------------------------------------------
    Make special arrow button appear clicked on mousedown event
    ----------------------------------------------------------------*/
    $("#add_fav_arrow").on("mousedown", function(){ 
        $(this).css('background-image', 'url(./images/arrow_pressed.gif)' );         
        });
        
    /*----------------------------------------------------------------
    Make special arrow button appear clicked on mousedown event
    ----------------------------------------------------------------*/
    $("#add_fav_arrow").on("mouseup mouseleave", function(){
        $(this).css('background-image', 'url(./images/arrow_unpressed.gif)' );
        });
    
    /*----------------------------------------------------------------
    Handle add to favorites button press by adding selected venues to
    the favorites list
    ----------------------------------------------------------------*/
    $("#add_fav_arrow").click(function(){
        addToFavorites();
        });
        
    /*----------------------------------------------------------------
    Handle the remove selected favorites button press by removing
    venues selected on the favorites list.
    ----------------------------------------------------------------*/
    $("#remove_sel_favs_btn").click(function(){
        $("#fav_venues_list option:selected").each(function(){
            $(this).remove();
            });
        });
            
    /*----------------------------------------------------------------
    Handle the buttons on the about page. If the user decides to view
    the text about page, simply show the text about section. Otherwise,
    the flash presentation will be played.
    ----------------------------------------------------------------*/    
    $("#about_choice button").click( function(){
        if( $(this).attr("id") == "text_ver" )
            {
            $("#about_choice").slideUp();
            $("#showdrip_about_text").slideDown( );
            }
        else if( $(this).attr("id") == "flash_ver" )
            {
            $("#about_choice").slideUp();            
            $("#showdrip_flash").slideDown( );
            }
        });
    
    /*----------------------------------------------------------------
    Perform instant search
    ----------------------------------------------------------------*/
    $('#search_string').keyup(function(event){
        var venue_search;
                
        if( $(this).attr("name") == "ven_search_string" )
            {
            glbl_num_search_fields = NUM_VENUE_SEARCH_FIELDS;
            venue_search = true;
            }
        else
            {
            glbl_num_search_fields = NUM_GEN_SEARCH_FIELDS;
            venue_search = false;
            }
        showResultsTable(venue_search);
        $("#search_results").show("slow");
        });    
        
    /*----------------------------------------------------------------
    For now display the text noting that there's not any real login
    action happening yet
    ----------------------------------------------------------------*/    
    $(".login_area button").click( function() {
        $(".login_text").html("");
        $(this).siblings(".login_text").html("The site isn't hooked up to a database yet, like it will be in full awesomeness so we can't save/access login info yet. Soon.");
        });
      
    /*----------------------------------------------------------------
    For now display the text noting that there's not any real settings
    action happening yet
    ----------------------------------------------------------------*/    
    $("#save_settings_btn").click( function() {        
        $(".settings_help_text").html("The site isn't hooked up to a database yet, like it will be in full awesomeness so we can't save/access settings info yet. Soon.");
        });    
} );

