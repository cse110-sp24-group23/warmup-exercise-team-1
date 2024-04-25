/*
Given a string passed into from when a rating div is hovered over, 
update the text-rating paragraph tag with that string
Parameters: 
 - labelText: string that denotes the positivity of the hovered rating
Returns:
 - None (updates HTML)
*/
function hoverHighlight(labelText){
    // select paragraph tag by its js class name
    const paragraphs = document.getElementsByClassName("js-text-rating");
    const pTag = paragraphs[0];
    // set the inner text and color of the p tag
    pTag.innerText = labelText;
    pTag.style.color = "gray";
}
