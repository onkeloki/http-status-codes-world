/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


WA.room.onEnterZone('XXX_100_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '100\n\nContinue\n', []);})
WA.room.onLeaveZone('XXX_100_XXX', closePopUp)

WA.room.onEnterZone('XXX_101_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '101\n\nSwitching Protocols\n', []);})
WA.room.onLeaveZone('XXX_101_XXX', closePopUp)

WA.room.onEnterZone('XXX_102_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '102\n\nProcessing\n', []);})
WA.room.onLeaveZone('XXX_102_XXX', closePopUp)

WA.room.onEnterZone('XXX_103_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '103\n\nEarly Hints\n', []);})
WA.room.onLeaveZone('XXX_103_XXX', closePopUp)

WA.room.onEnterZone('XXX_200_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '200\n\nOK\n', []);})
WA.room.onLeaveZone('XXX_200_XXX', closePopUp)

WA.room.onEnterZone('XXX_201_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '201\n\nCreated\n', []);})
WA.room.onLeaveZone('XXX_201_XXX', closePopUp)

WA.room.onEnterZone('XXX_202_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '202\n\nAccepted\n', []);})
WA.room.onLeaveZone('XXX_202_XXX', closePopUp)

WA.room.onEnterZone('XXX_203_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '203\n\nNon-Authoritative Information (since HTTP/1.1)\n', []);})
WA.room.onLeaveZone('XXX_203_XXX', closePopUp)

WA.room.onEnterZone('XXX_204_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '204\n\nNo Content\n', []);})
WA.room.onLeaveZone('XXX_204_XXX', closePopUp)

WA.room.onEnterZone('XXX_205_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '205\n\nReset Content\n', []);})
WA.room.onLeaveZone('XXX_205_XXX', closePopUp)

WA.room.onEnterZone('XXX_206_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '206\n\nPartial Content (RFC 7233)\n', []);})
WA.room.onLeaveZone('XXX_206_XXX', closePopUp)

WA.room.onEnterZone('XXX_207_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '207\n\nMulti-Status (WebDAV; RFC 4918)\n', []);})
WA.room.onLeaveZone('XXX_207_XXX', closePopUp)

WA.room.onEnterZone('XXX_208_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '208\n\nAlready Reported (WebDAV; RFC 5842)\n', []);})
WA.room.onLeaveZone('XXX_208_XXX', closePopUp)

WA.room.onEnterZone('XXX_226_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '226\n\nM Used (RFC 3229)\n', []);})
WA.room.onLeaveZone('XXX_226_XXX', closePopUp)

WA.room.onEnterZone('XXX_300_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '300\n\nMultiple Choices\n', []);})
WA.room.onLeaveZone('XXX_300_XXX', closePopUp)

WA.room.onEnterZone('XXX_301_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '301\n\nMoved Permanently\n', []);})
WA.room.onLeaveZone('XXX_301_XXX', closePopUp)

WA.room.onEnterZone('XXX_302_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '302\n\nFound (Previously "Moved temporarily")\n', []);})
WA.room.onLeaveZone('XXX_302_XXX', closePopUp)

WA.room.onEnterZone('XXX_303_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '303\n\nSee Other (since HTTP/1.1)\n', []);})
WA.room.onLeaveZone('XXX_303_XXX', closePopUp)

WA.room.onEnterZone('XXX_304_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '304\n\nNot Modified (RFC 7232)\n', []);})
WA.room.onLeaveZone('XXX_304_XXX', closePopUp)

WA.room.onEnterZone('XXX_305_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '305\n\nUse Proxy (since HTTP/1.1)\n', []);})
WA.room.onLeaveZone('XXX_305_XXX', closePopUp)

WA.room.onEnterZone('XXX_306_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '306\n\nSwitch Proxy\n', []);})
WA.room.onLeaveZone('XXX_306_XXX', closePopUp)

WA.room.onEnterZone('XXX_307_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '307\n\nTemporary Redirect (since HTTP/1.1)\n', []);})
WA.room.onLeaveZone('XXX_307_XXX', closePopUp)

WA.room.onEnterZone('XXX_308_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '308\n\nPermanent Redirect (RFC 7538)\n', []);})
WA.room.onLeaveZone('XXX_308_XXX', closePopUp)


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
