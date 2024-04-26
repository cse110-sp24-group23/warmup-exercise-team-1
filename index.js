/*
Given a div and string passed into from when a rating div is hovered over, 
update the text-rating paragraph tag with that string
Parameters:
 - targetDiv: the div of class "js-target-div" that was hovered over to initiate the function
 - labelText: string that denotes the positivity of the hovered rating
Returns:
 - None (updates HTML/CSS)
*/
function hoverRatingDiv(targetDiv, labelText){
    // select paragraph tag by its js class name
    const paragraphs = document.getElementsByClassName("js-text-rating");
    const pTag = paragraphs[0];
    /* check if the inner text of the p tag exists and is black. If so, store the inner text
    and put it back in after the mouse stops hovering over the current div. */
    const prevText = pTag.innerText;
    let prevClicked = false;
    // if text was black and nonempty, an option was previously clicked. 
    if(pTag.innerText.length > 0 && pTag.style.color === "black"){
        prevClicked = true;
    }
    // set the inner text and color of the p tag
    pTag.innerText = labelText;
    pTag.style.color = "gray";
    /* Once the mouse stops hovering on this option, return pTag to its previous text
    of the clicked rating option */
    if(prevClicked){
        _putBackClickedText(targetDiv, prevText, pTag);
    }
}

/*
Given a div and string passed into from when a rating div is clicked on, 
update the text-rating paragraph tag with that string and darken all other rating-divs
Parameters: 
 - targetDiv: the div of class "js-target-div" that was clicked on to initiate the function
 - labelText: string that denotes the positivity of the hovered rating
Returns:
 - None (updates HTML/CSS)
*/
function clickRatingDiv(targetDiv, labelText){
    // set targetDiv's brightness to 100%
    targetDiv.style.filter = "brightness(1)";
    // select all divs of class "js-rating-div"
    const ratingDivs = document.getElementsByClassName("js-rating-div")
    // set each rating-div besides targetDiv to 50% brightness
    for (let i=0; i<ratingDivs.length; i++){
        if(ratingDivs[i] !== targetDiv){
            ratingDivs[i].style.filter = "brightness(0.5)";
        }
    }

    // select rating-text paragraph by its js class name
    const paragraphs = document.getElementsByClassName("js-text-rating");
    const pTag = paragraphs[0];
    // update pTag's innerText and color
    pTag.innerText = labelText;
    pTag.style.color = "black";
    // update _returnClickedText's prevText to be the newest clicked text
    _putBackClickedText(targetDiv, labelText, pTag)

    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = false;
}


function _putBackClickedText(targetDiv, prevClickedText, pTag){
    targetDiv.addEventListener('mouseleave', function() {
        pTag.innerText = prevClickedText;
        pTag.style.color = "black";
    });
}