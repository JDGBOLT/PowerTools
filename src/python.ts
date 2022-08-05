import { ServerAPI } from "decky-frontend-lib";

var server: ServerAPI | undefined = undefined;

//import { useEffect } from "react";

export function resolve(promise: Promise<any>, setter: any) {
    (async function () {
        let data = await promise;
        if (data.success) {
            console.debug("Got resolved", data, "promise", promise);
            setter(data.result);
        } else {
            console.warn("Resolve failed:", data, "promise", promise);
        }
    })();
}

export function execute(promise: Promise<any>) {
    (async function () {
        let data = await promise;
        if (data.success) {
            console.debug("Got executed", data, "promise", promise);
        } else {
            console.warn("Execute failed:", data, "promise", promise);
        }

    })();
}

export function setServer(s: ServerAPI) {
    server = s;
}

// Python functions
export function getVersion(): Promise<any> {
    return server!.callPluginMethod("get_version", {});
}

export function onViewReady(): Promise<any> {
    return server!.callPluginMethod("on_ready", {});
}

export function setCPUs(value: number, smt: boolean): Promise<any> {
    return server!.callPluginMethod("set_cpus", {"count":value, "smt": smt});
}

export function getCPUs(): Promise<any> {
    return server!.callPluginMethod("get_cpus", {});
}

export function getSMT(): Promise<any> {
    return server!.callPluginMethod("get_smt", {});
}

export function setManual(value: boolean): Promise<any> {
    return server!.callPluginMethod("set_manual", {"enabled": value});
}

export function getManual(): Promise<any> {
    return server!.callPluginMethod("get_manual", {});
}

export function setLowMem(value: boolean): Promise<any> {
    return server!.callPluginMethod("set_lowmem", {"enabled": value});
}

export function getLowMem(): Promise<any> {
    return server!.callPluginMethod("get_lowmem", {});
}

export function setMinCPUFreq(freq: number): Promise<any> {
    return server!.callPluginMethod("set_min_cpu_freq", {"freq": freq});
}

export function setMaxCPUFreq(freq: number): Promise<any> {
    return server!.callPluginMethod("set_max_cpu_freq", {"freq": freq});
}

export function getMinCPUFreq(): Promise<any> {
    return server!.callPluginMethod("get_min_cpu_freq", {});
}

export function getMaxCPUFreq(): Promise<any> {
    return server!.callPluginMethod("get_max_cpu_freq", {});
}

export function setMinGPUFreq(freq: number): Promise<any> {
    return server!.callPluginMethod("set_min_gpu_freq", {"freq": freq});
}

export function setMaxGPUFreq(freq: number): Promise<any> {
    return server!.callPluginMethod("set_max_gpu_freq", {"freq": freq});
}

export function getMinGPUFreq(): Promise<any> {
    return server!.callPluginMethod("get_min_gpu_freq", {});
}

export function getMaxGPUFreq(): Promise<any> {
    return server!.callPluginMethod("get_max_gpu_freq", {});
}

export function setGPUPower(value: number, index: number): Promise<any> {
    return server!.callPluginMethod("set_gpu_power", {"value": value, "power_number": index});
}

export function getGPUPower(index: number): Promise<any> {
    return server!.callPluginMethod("get_gpu_power", {"power_number": index});
}

export function setGPUPowerI(value: number, index: number): Promise<any> {
    return server!.callPluginMethod("set_gpu_power_index", {"index": value, "power_number": index});
}

export function getGPUPowerI(index: number): Promise<any> {
    return server!.callPluginMethod("get_gpu_power_index", {"power_number": index});
}

export function setFanTick(tick: number): Promise<any> {
    return server!.callPluginMethod("set_fan_tick", {"tick": tick});
}

export function getFanTick(): Promise<any> {
    return server!.callPluginMethod("get_fan_tick", {});
}

export function getFantastic(): Promise<any> {
    return server!.callPluginMethod("fantastic_installed", {});
}

export function getChargeNow(): Promise<any> {
    return server!.callPluginMethod("get_charge_now", {});
}

export function getChargeFull(): Promise<any> {
    return server!.callPluginMethod("get_charge_full", {});
}

export function getChargeDesign(): Promise<any> {
    return server!.callPluginMethod("get_charge_design", {});
}

export function setPersistent(value: boolean): Promise<any> {
    return server!.callPluginMethod("set_persistent", {"enabled": value});
}

export function getPersistent(): Promise<any> {
    return server!.callPluginMethod("get_persistent", {});
}

export function setPerGameProfile(value: boolean): Promise<any> {
    return server!.callPluginMethod("set_per_game_profile", {"enabled": value});
}

export function getPerGameProfile(): Promise<any> {
    return server!.callPluginMethod("get_per_game_profile", {});
}

export function getCurrentGame(): Promise<any> {
    return server!.callPluginMethod("get_current_game", {});
}

export function onGameStart(gameId: number, data: any): Promise<any> {
    const data2 = {appid: data.appid, display_name: data.display_name, gameid: gameId}; // Issue #17
    return server!.callPluginMethod("on_game_start", {"game_id": gameId, "data":data2});
}

export function onGameStop(gameId: number | null): Promise<any> {
    return server!.callPluginMethod("on_game_stop", {"game_id": gameId});
}
