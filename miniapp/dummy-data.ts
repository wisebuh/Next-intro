const DUMMY_EVENTS = [
    {
        id: 'e1',
        title:"Programming for everyone",
        description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to boast",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"images/coding.jpg",
        isFeatured:true
    },
    {
        id:"e2",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"images/introvert.jpg",
        isFeatured:true,
    },
    {
        id: 'e3',
        title:"Building a condusive environmenr",
        description:"Building a society for everyone!",
        location:"A street close to you, 12343 Amasoma",
        date:"2021-05-19",
        image:"images/extrovert.jpg",
        isFeatured:false
    },
    {
        id:"e4",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"images/networking.jpg",
        isFeatured:true,
    },
    {
        id: 'e5',
        title:"Programming for everyone",
        description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to boast",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"",
        isFeatured:false
    },
    {
        id:"e6",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"",
        isFeatured:false,
    },
    {
        id: 'e7',
        title:"Excising the power of influence",
        description:"Everyone gets inluenced at some point! We just need to guided on what influences us",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"images/influence.jpg",
        isFeatured:true
    },
    {
        id:"e8",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"",
        isFeatured:false,
    },
    {
        id: 'e10',
        title:"Programming for everyone",
        description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to boast",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"",
        isFeatured:false
    },
    {
        id:"e11",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"",
        isFeatured:false,
    },
    {
        id: 'e12',
        title:"Programming for everyone",
        description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to boast",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"",
        isFeatured:false
    },
    {
        id:"e13",
        title:"Networking for introvets",
        description:"We know: Networking is no fun if you are an introvert person. That's why we came here ",
        location:"New Wall Street 5, 98765 New York",
        date:"2021-05-30",
        image:"",
        isFeatured:false,
    },
    {
        id: 'e14',
        title:"Programming for everyone",
        description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to boast",
        location:"Somestreet 25, 12345 San Somewhere",
        date:"2021-05-12",
        image:"",
        isFeatured:false
    }
];

export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter(event=> event.isFeatured);
}

export function getAllEvents(){
    return DUMMY_EVENTS;
}

export function getFilteredEvents({dateFilter}:any){
    const {year, month} = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month -1
    });

    return filteredEvents;
}


export function getEventById(id: string) {
  return DUMMY_EVENTS.find(event => event.id === id);
}