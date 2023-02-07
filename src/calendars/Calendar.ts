import { TFile } from "obsidian";
import { CalendarInfo, EventLocation, OFCEvent } from "src/types";

export const ID_SEPARATOR = "::";

export type EventResponse = [OFCEvent, EventLocation | null];

/**
 * Abstract class representing the interface for a Calendar.
 */
export abstract class Calendar {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract get type(): CalendarInfo["type"];
    abstract get id(): string;
    abstract get name(): string;

    /**
     * Return events along with their associated source files, if they exist.
     */
    abstract getEvents(): Promise<EventResponse[]>;
}