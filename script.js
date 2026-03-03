
function describeRoom(room){
    if (room == "foyer") {
        return "The room is eerily quiet, like the whole house is suspended in a moment, waiting for the return of its master."
    } else if (room == "stairs") {
        return "The stairs leading towards the upper floor curve around the mottled green pattern of the wall, reminiscent of the mold that has corrupted much of the abandoned abode."
    } else if (room == "bedroom") {
        return "The bedroom is more well-lit than the rest of the house. The dim yellow light reveals a room in perfect condition, a stark contrast to the decrepit nature of the building surrounding it."
    } else if (room == "entrance"){
        return ""
    }
}

let bedroomNode = {image : "bedroom.jpg", text : "The bedroom is more well-lit than the rest of the house. The dim yellow light reveals a room in perfect condition, a stark contrast to the decrepit nature of the building surrounding it.", choices : ["Go back to the foyer", "Return to the stairs", "Exit through the front"]};
let foyerNode = {image: "foyer.jpg", text : "The room is eerily quiet, like the whole house is suspended in a moment, waiting for the return of its master.", choices : ["Enter the bedroom", "Go down the stairs"]};
let entranceNode = {image : "entrance.jpg", text : "You stand at the doormat of an old abandoned house. It feels strangely empty, the slow regard of silent things waiting for their end to come dulling the atmosphere of the building.", choices : ["Enter the house"]};
let stairsNode = {image : "stairs.jpg", text : "The stairs leading towards the upper floor curve around the mottled green pattern of the wall, reminiscent of the mold that has corrupted much of the abandoned abode.", choices : ["Exit the house", "Continue into the foyer"]};
let storyNodes = [bedroomNode, foyerNode, entranceNode, stairsNode];

function displayNode(ind){
    let tempNode = storyNodes[ind]
    document.getElementById("img").src = tempNode["image"]
    document.getElementById("caption").innerText = tempNode["text"]
}
