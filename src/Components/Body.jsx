"u"
import React from 'react'
import BodyCol from './BodyCol'

const Body = () => {
    const data = [
        [
            {
                postImg: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Audi A5",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1580416274030-fbb94dfec844image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "olav_tvedt"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Just wondering how my photography of my car does on unsplash",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1709746231598-d9591a149ca2image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Lance Asper"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Cars Backgrounds",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1609202852282-a64aa3b44025image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Dhiva Krishna"
                }
            },

        ],
        [
            {
                postImg: "https://images.unsplash.com/photo-1618205062886-3976f4bb8219?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Supra MK5",
                user: {
                    imgUser: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Anthony Bautista"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1627008119017-f89d9704a799?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "",
                user: {
                    imgUser: "https://images.unsplash.com/photo-1627008119017-f89d9704a799?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    uid: "Chris Demers"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1561053659-12b208af087a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Superbike Wallpaper",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1682630105166-b2a28493755bimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Thanuj Mathew"
                }
            },

        ],
        [
            {
                postImg: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1518174728215-8c1dc8a44d32?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Goutham Krishna"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Nature's love",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1690398228733-ea9c81a6ad82image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Dave Hoefler"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1709108254795-40d910d825d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Editorial, Experimental",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1691641399953-a81afe70cd93image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Dmitrii Shirnin"
                }
            },

        ],
        [
            {
                postImg: "https://images.unsplash.com/photo-1711359974538-2e6424402a28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1710773764523-58492e6c66e5?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Yves Cedric Schulze"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1710959613252-02c007c51902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Beautiful vintage green car in a small Swedish street.",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1710958220534-1bdd62491cdbimage?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Maureen Eijpe"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Nature's love",
                user: {
                    imgUser: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
                    uid: "Loura"
                }
            },

        ],
        [
            {
                postImg: "https://images.unsplash.com/photo-1711058539692-6c05b25d03dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Lgnwvr.com | @Lgnwvr",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1648284806245-917d58e93dce?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "LOGAN WEAVER | @LGNWVR"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1711313525588-c4b9f3ef4847?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "",
                user: {
                    imgUser: "https://images.unsplash.com/photo-1711313525588-c4b9f3ef4847?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    uid: "Batuhan Doğan"
                }
            },
            {
                postImg: "https://images.unsplash.com/photo-1711319551829-3fadadf67cd9?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: " The towers of Tower Falls",
                user: {
                    imgUser: "https://images.unsplash.com/profile-1579171056760-0293bb679901image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    uid: "Boston Public Library"
                }
            },

        ],

    ]

    return (
        <div id="body" className='w-full min-h-screen pt-24 px-6 grid grid-cols-5 gap-4'>
            {data.map((items, index) => {
                return (
                    <BodyCol key={index} dets={data[index]} />
                )
            })}
        </div>
    )
}

export default Body