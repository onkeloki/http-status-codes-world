/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


//###TPL_HOOK###
WA.room.onEnterZone('XXX_CODE_XXX', () => {
    currentPopup = WA.ui.openPopup("clockPopup", "It's \n\n" + time, []);
})

WA.room.onLeaveZone('XXX_CODE_XXX', closePopUp)

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
