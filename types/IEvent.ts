interface IEvent {
    eventName: string;
    date: string;
    timeZone: string;
    startTime: string;
    endTime: string;
    description: string;
    videoLink: string;
    bannerImage: File | null;
    [key: string]: File | string | null;
}

export default IEvent;