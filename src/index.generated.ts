/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


WA.room.onEnterZone('XXX_1XX_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '1XX\n\nInformational response\n', []);})
WA.room.onLeaveZone('XXX_1XX_XXX', closePopUp)

WA.room.onEnterZone('XXX_100_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '100\n\nContinue\n', []);})
WA.room.onLeaveZone('XXX_100_XXX', closePopUp)

WA.room.onEnterZone('XXX_101_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '101\n\nSwitching Protocols\n', []);})
WA.room.onLeaveZone('XXX_101_XXX', closePopUp)

WA.room.onEnterZone('XXX_102_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '102\n\nProcessing\n', []);})
WA.room.onLeaveZone('XXX_102_XXX', closePopUp)

WA.room.onEnterZone('XXX_103_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '103\n\nEarly Hints\n', []);})
WA.room.onLeaveZone('XXX_103_XXX', closePopUp)

WA.room.onEnterZone('XXX_2XX_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '2XX\n\nsuccess\n', []);})
WA.room.onLeaveZone('XXX_2XX_XXX', closePopUp)

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

WA.room.onEnterZone('XXX_226_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '226\n\nIM Used (RFC 3229)\n', []);})
WA.room.onLeaveZone('XXX_226_XXX', closePopUp)

WA.room.onEnterZone('XXX_3XX_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '3XX\n\nredirection\n', []);})
WA.room.onLeaveZone('XXX_3XX_XXX', closePopUp)

WA.room.onEnterZone('XXX_300_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '300\n\nMultiple Choices\n', []);})
WA.room.onLeaveZone('XXX_300_XXX', closePopUp)

WA.room.onEnterZone('XXX_301_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '301\n\nMoved Permanently\n', []);})
WA.room.onLeaveZone('XXX_301_XXX', closePopUp)

WA.room.onEnterZone('XXX_302_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '302\n\nFound (Previously: Moved temporarily)\n', []);})
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

WA.room.onEnterZone('XXX_4XX_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '4XX\n\nclient error\n', []);})
WA.room.onLeaveZone('XXX_4XX_XXX', closePopUp)

WA.room.onEnterZone('XXX_400_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '400\n\nBad Request\n', []);})
WA.room.onLeaveZone('XXX_400_XXX', closePopUp)

WA.room.onEnterZone('XXX_401_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '401\n\nUnauthorized\n', []);})
WA.room.onLeaveZone('XXX_401_XXX', closePopUp)

WA.room.onEnterZone('XXX_402_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '402\n\nPayment Required\n', []);})
WA.room.onLeaveZone('XXX_402_XXX', closePopUp)

WA.room.onEnterZone('XXX_403_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '403\n\nForbidden\n', []);})
WA.room.onLeaveZone('XXX_403_XXX', closePopUp)

WA.room.onEnterZone('XXX_404_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '404\n\nNot Found\n', []);})
WA.room.onLeaveZone('XXX_404_XXX', closePopUp)

WA.room.onEnterZone('XXX_405_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '405\n\nMethod Not Allowed\n', []);})
WA.room.onLeaveZone('XXX_405_XXX', closePopUp)

WA.room.onEnterZone('XXX_406_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '406\n\nNot Acceptable\n', []);})
WA.room.onLeaveZone('XXX_406_XXX', closePopUp)

WA.room.onEnterZone('XXX_407_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '407\n\nProxy Authentication Required\n', []);})
WA.room.onLeaveZone('XXX_407_XXX', closePopUp)

WA.room.onEnterZone('XXX_408_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '408\n\nRequest Timeout\n', []);})
WA.room.onLeaveZone('XXX_408_XXX', closePopUp)

WA.room.onEnterZone('XXX_409_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '409\n\nConflict\n', []);})
WA.room.onLeaveZone('XXX_409_XXX', closePopUp)

WA.room.onEnterZone('XXX_410_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '410\n\nGone\n', []);})
WA.room.onLeaveZone('XXX_410_XXX', closePopUp)

WA.room.onEnterZone('XXX_411_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '411\n\nLength Required\n', []);})
WA.room.onLeaveZone('XXX_411_XXX', closePopUp)

WA.room.onEnterZone('XXX_412_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '412\n\nPrecondition Failed\n', []);})
WA.room.onLeaveZone('XXX_412_XXX', closePopUp)

WA.room.onEnterZone('XXX_413_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '413\n\nPayload Too Large\n', []);})
WA.room.onLeaveZone('XXX_413_XXX', closePopUp)

WA.room.onEnterZone('XXX_414_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '414\n\nURI Too Long\n', []);})
WA.room.onLeaveZone('XXX_414_XXX', closePopUp)

WA.room.onEnterZone('XXX_415_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '415\n\nUnsupported Media Type\n', []);})
WA.room.onLeaveZone('XXX_415_XXX', closePopUp)

WA.room.onEnterZone('XXX_416_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '416\n\nRange Not Satisfiable\n', []);})
WA.room.onLeaveZone('XXX_416_XXX', closePopUp)

WA.room.onEnterZone('XXX_417_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '417\n\nExpectation Failed\n', []);})
WA.room.onLeaveZone('XXX_417_XXX', closePopUp)

WA.room.onEnterZone('XXX_418_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '418\n\n418 I'm a teapot\n', []);})
WA.room.onLeaveZone('XXX_418_XXX', closePopUp)

WA.room.onEnterZone('XXX_421_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '421\n\nMisdirected Request\n', []);})
WA.room.onLeaveZone('XXX_421_XXX', closePopUp)

WA.room.onEnterZone('XXX_422_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '422\n\nUnprocessable Entity\n', []);})
WA.room.onLeaveZone('XXX_422_XXX', closePopUp)

WA.room.onEnterZone('XXX_423_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '423\n\nLocked\n', []);})
WA.room.onLeaveZone('XXX_423_XXX', closePopUp)

WA.room.onEnterZone('XXX_424_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '424\n\nFailed Dependency\n', []);})
WA.room.onLeaveZone('XXX_424_XXX', closePopUp)

WA.room.onEnterZone('XXX_425_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '425\n\nToo Early\n', []);})
WA.room.onLeaveZone('XXX_425_XXX', closePopUp)

WA.room.onEnterZone('XXX_426_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '426\n\nUpgrade Required\n', []);})
WA.room.onLeaveZone('XXX_426_XXX', closePopUp)

WA.room.onEnterZone('XXX_428_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '428\n\nPrecondition Required\n', []);})
WA.room.onLeaveZone('XXX_428_XXX', closePopUp)

WA.room.onEnterZone('XXX_429_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '429\n\nToo Many Requests\n', []);})
WA.room.onLeaveZone('XXX_429_XXX', closePopUp)

WA.room.onEnterZone('XXX_431_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '431\n\nRequest Header Fields Too Large\n', []);})
WA.room.onLeaveZone('XXX_431_XXX', closePopUp)

WA.room.onEnterZone('XXX_451_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '451\n\nUnavailable For Legal Reasons\n', []);})
WA.room.onLeaveZone('XXX_451_XXX', closePopUp)

WA.room.onEnterZone('XXX_5XX_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '5XX\n\nServer Error\n', []);})
WA.room.onLeaveZone('XXX_5XX_XXX', closePopUp)

WA.room.onEnterZone('XXX_500_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '500\n\nInternal Server\n', []);})
WA.room.onLeaveZone('XXX_500_XXX', closePopUp)

WA.room.onEnterZone('XXX_501_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '501\n\nNot Implemented\n', []);})
WA.room.onLeaveZone('XXX_501_XXX', closePopUp)

WA.room.onEnterZone('XXX_502_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '502\n\nBad Gateway\n', []);})
WA.room.onLeaveZone('XXX_502_XXX', closePopUp)

WA.room.onEnterZone('XXX_503_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '503\n\nService Unavailable\n', []);})
WA.room.onLeaveZone('XXX_503_XXX', closePopUp)

WA.room.onEnterZone('XXX_504_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '504\n\nGateway Timeout\n', []);})
WA.room.onLeaveZone('XXX_504_XXX', closePopUp)

WA.room.onEnterZone('XXX_505_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '505\n\nHTTP Version not supported\n', []);})
WA.room.onLeaveZone('XXX_505_XXX', closePopUp)

WA.room.onEnterZone('XXX_506_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '506\n\nVariant Also Negotiates\n', []);})
WA.room.onLeaveZone('XXX_506_XXX', closePopUp)

WA.room.onEnterZone('XXX_507_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '507\n\nInsufficient Storage\n', []);})
WA.room.onLeaveZone('XXX_507_XXX', closePopUp)

WA.room.onEnterZone('XXX_508_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '508\n\nLoop Detected\n', []);})
WA.room.onLeaveZone('XXX_508_XXX', closePopUp)

WA.room.onEnterZone('XXX_509_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '509\n\nBandwidth Limit\n', []);})
WA.room.onLeaveZone('XXX_509_XXX', closePopUp)

WA.room.onEnterZone('XXX_510_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '510\n\nNot Extended\n', []);})
WA.room.onLeaveZone('XXX_510_XXX', closePopUp)

WA.room.onEnterZone('XXX_511_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', '511\n\nNetwork Authentication Required\n', []);})
WA.room.onLeaveZone('XXX_511_XXX', closePopUp)


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
