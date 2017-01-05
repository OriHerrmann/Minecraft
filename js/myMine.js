
var LandingPage = {};

LandingPage.init = function(){
    $(document).ready(function(){
        $(".btn-post").one("click",function(){
                $("#landingPage").fadeOut();
                $('.game').show();
            })
        });

};

LandingPage.init();

var mc = {};

mc.matrix = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "cloud", "cloud", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "cloud", "cloud", "cloud", "cloud", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "cloud", "cloud", "cloud", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "cloud", "cloud", "cloud", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "cloud", "cloud", "cloud", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", "", "", ""],
    ["", "", "", "", "bx", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "leaf", "leaf", "", "", ""],
    ["", "", "", "mario", "", "", "", "", "", "", "", "", "", "leaf", "leaf", "leaf", "", "", "", ""],
    ["", "", "leaf", "leaf", "leaf", "leaf", "", "", "", "", "", "", "", "", "tree", "", "", "", "", ""],
    ["", "", "", "leaf", "leaf", "", "", "", "", "", "", "", "", "", "tree", "", "", "", "", "rock"],
    ["", "", "", "leaf", "leaf", "", "", "", "", "goomb", "", "", "rock", "rock", "tree", "rock", "", "", "rock", "rock"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"]

];

for (var i = 0; i < mc.matrix.length; i++) {
    var gameSq = $("<div/>").addClass("row").appendTo('body');
    for (var j = 0; j < mc.matrix[i].length; j++) {
        var sq = $("<div/>").addClass("box").appendTo(gameSq);
        $('.game').append(gameSq);}
}

var boxes_list = $('.box')
for (var i = 0; i < mc.matrix.length; i++) {
    for (var j = 0; j < mc.matrix[i].length; j++) {
        var count = i*20 + j
        console.log(count)
        var specific_class = mc.matrix[i][j]
        console.log(specific_class)
        $(boxes_list[count]).addClass(specific_class)
    }
}

/*for (var a = 0; a < mc.matrix.length; a++) {
 for (var b = 0; b < mc.matrix[i].length; b++) {
 if (mc.matrix[a][b] === "") {
 mc.matrix[a][b] = "sky";
 }

 mc.tiles.eq(a * 20 + b).data("a", a).data("b", b).addClass(mc.matrix[a][b]);
 }
 };*/

var toolBar = document.createElement('div');
toolBar.id='toolBar';
document.body.appendChild(toolBar);


var axe = document.createElement('div');
axe.id='axe';
axe.className='tools';
axe.addEventListener('click', getTool);
toolBar.appendChild(axe);

var pick = document.createElement('div');
pick.id='pick';
pick.className='tools';
pick.addEventListener('click', getTool);
toolBar.appendChild(pick);

var shovel = document.createElement('div');
shovel.id='shovel';
shovel.className='tools';
shovel.addEventListener('click', getTool);
toolBar.appendChild(shovel);

var selectedSq = document.createElement('div');
selectedSq.id='selectedSq';
//selectedSq.className='tools';
selectedSq.addEventListener('click', getTool);
toolBar.appendChild(selectedSq);


var getTool ="";
var counter = 0;
var ToolSelection;

function getTool(e){

    ToolSelection=e.target.id;

}

var isAxeActive = false;
var isPickActive = false;
var isShovelActive = false;
var isSelectedSqActive = false;

$('#axe').bind('click', function () {
    isAxeActive = !isAxeActive;
    console.log(isAxeActive)
    if (isAxeActive){
        $('.highlight').removeClass('highlight')
        $(this).addClass('highlight')
    } if (isAxeActive){
        $(isPickActive=false)
        $(isShovelActive=false)
    }
})
$('#pick').bind('click', function () {
    isPickActive = !isPickActive;
    console.log(isPickActive)
    if (isPickActive){
        $('.highlight').removeClass('highlight')
        $(this).addClass('highlight')
    }if (isPickActive){
        $(isAxeActive=false)
        $(isShovelActive=false)
    }
})

$('#shovel').bind('click', function () {
    isShovelActive = !isShovelActive;
    console.log(isShovelActive)
    if (isShovelActive){
        $('.highlight').removeClass('highlight')
        $(this).addClass('highlight')
    }if (isShovelActive){
        $(isPickActive=false)
        $(isAxeActive=false)
    }
})

var holdUntilNextClick = false
$('#selectedSq').bind('click', function () {
    if ($(this).hasClass('leaf') || $(this).hasClass('dirt') || $(this).hasClass('tree')|| $(this).hasClass('rock') || $(this).hasClass('grass'))
    {
        holdUntilNextClick = true
        console.log('has class');
    }
})


function setupEventForGrid(){

    $('.leaf').bind('click', function (e) {
        if (isAxeActive)
        {
            $(this).removeClass('leaf')
            $('#selectedSq').addClass('leaf')
        }
        else
        {
            console.log('no axe selected!')
        }
    })

    $('.tree').bind('click', function (e) {
        if (isAxeActive)
        {
            $(this).removeClass('tree')
            $('#selectedSq').addClass('tree')
        }
        else
        {
            console.log('no axe selected!')
        }
    })
    $('.grass').bind('click', function (e) {
        if (isShovelActive)
        {
            $(this).removeClass('grass')
            $('#selectedSq').addClass('grass')
        }
        else
        {
            console.log('no shovel selected!')
        }
    })


    $('.dirt').bind('click', function (e) {
        if (isShovelActive)
        {
            $(this).removeClass('dirt')
            $('#selectedSq').addClass('dirt')
        }
        else
        {
            console.log('no shovel selected!')
        }
    })
    $('.rock').bind('click', function (e) {
        if (isPickActive)
        {
            $(this).removeClass('rock')



            $('#selectedSq').addClass('rock')
        }
        else
        {
            console.log('no rock selected!')
        }
    })

    $('.box').bind('click', function (e) {
        console.log('bind box')
        if (holdUntilNextClick)
        {
            $('.box').unbind()
            var lastClass = $('#selectedSq').attr("class")
            console.log(lastClass)
            $(this).addClass(lastClass)
            $('#selectedSq').removeClass(lastClass)
            holdUntilNextClick = false
            setupEventForGrid()
        }
        else
        {
            console.log('no selectedSq selected!')
        }
    })

}

setupEventForGrid();