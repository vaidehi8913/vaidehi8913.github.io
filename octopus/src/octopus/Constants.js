

export const navBarColor = "#008a05";
export const nextPrevButtonColor = "#a3a3a3";

export const possibleTags = [
    {tagID: "student",
    title: "Student Life",
    color: "#ffc400"},

    {tagID: "software",
    title: "Software",
    color: "#ff7700"},

    {tagID: "cstheory",
    title: "CS Theory",
    color: "#2200ff"},

    {tagID: "vienna",
    title: "Vienna",
    color: "#00a2ff"},

    {tagID: "evanston",
    title: "Evanston/Northwestern",
    color: "#4e2a84" // Northwestern branding purple
    },

    {tagID: "cmu",
    title: "Pittsburgh/CMU",
    color: "#cc002b" // CMU branding red
    },
];

export const comicList = [

    {id: 31, 
    imageFile: "31.png",
    imageWidth: "500px",
    date: "01/26/2022",
    caption: "",
    nextID: false,
    prevID: 30,
    tags: ["cstheory"]
    },

    {id: 30, 
    imageFile: "30.png",
    imageWidth: "600px",
    date: "01/13/2022",
    caption: "",
    nextID: 31,
    prevID: 29,
    tags: ["student"]
    },

    {id: 29, 
    imageFile: "29.png",
    imageWidth: "500px",
    date: "01/11/2022",
    caption: "",
    nextID: 30,
    prevID: 28,
    tags: ["evanston"]
    },

    {id: 28, 
    imageFile: "28.png",
    imageWidth: "500px",
    date: "01/10/2022",
    caption: "",
    nextID: 29,
    prevID: 27,
    tags: ["student"]
    },

    {id: 27, 
    imageFile: "27.png",
    imageWidth: "500px",
    date: "January 2021",
    caption: "",
    nextID: 28,
    prevID: 26,
    tags: ["vienna"]
    },

    {id: 26, 
    imageFile: "26.gif",
    imageWidth: "500px",
    date: "10/28/2020",
    caption: "",
    nextID: 27,
    prevID: 24,
    tags: ["vienna"]
    },

    {id: 24, 
    imageFile: "24.png",
    imageWidth: "700px",
    date: "10/12/2020",
    caption: "",
    nextID: 26,
    prevID: 23,
    tags: ["vienna"]
    },

    {id: 23, 
    imageFile: "23.gif",
    imageWidth: "800px",
    date: "10/10/2020",
    caption: "",
    nextID: 24,
    prevID: 22,
    tags: ["vienna"]
    },

    {id: 22, 
    imageFile: "22.gif",
    imageWidth: "800px",
    date: "10/07/2020",
    caption: "...when they misspell your name on an official document, and you wonder whether it will be easier to fix it, or just adopt this new identity.",
    nextID: 23,
    prevID: 21,
    tags: ["vienna"]
    },

    {id: 21, 
    imageFile: "21.gif",
    imageWidth: "800px",
    date: "10/06/2020",
    caption: "",
    nextID: 22,
    prevID: 20,
    tags: ["vienna"]
    },

    {id: 20, 
    imageFile: "20.jpeg",
    imageWidth: "500px",
    date: "02/11/2020",
    caption: "The Octopus is an SCS Student (4)",
    nextID: 21,
    prevID: 19,
    tags: ["student", "cmu"]
    },

    {id: 19, 
    imageFile: "19.jpeg",
    imageWidth: "500px",
    date: "02/10/2020",
    caption: "The Octopus is an SCS Student (3)",
    nextID: 20,
    prevID: 18,
    tags: ["student", "cmu"]
    },
    
    {id: 18, 
    imageFile: "18.jpeg",
    imageWidth: "500px",
    date: "02/10/2020",
    caption: "The Octopus is an SCS Student (2)",
    nextID: 19,
    prevID: 17,
    tags: ["student", "cmu"]
    },
    
    {id: 17, 
    imageFile: "17.jpeg",
    imageWidth: "500px",
    date: "02/07/2020",
    caption: "The Octopus is an SCS Student (1)",
    nextID: 18,
    prevID: 16,
    tags: ["student", "cmu"]
    },
    
    {id: 16, 
    imageFile: "16.jpeg",
    imageWidth: "500px",
    date: "02/01/2020",
    caption: "",
    nextID: 17,
    prevID: 15,
    tags: []
    },
    
    {id: 15, 
    imageFile: "15.jpeg",
    imageWidth: "500px",
    date: "06/09/2018",
    caption: "The Octopus is a Software Engineering Intern (15)",
    nextID: 16,
    prevID: 14,
    tags: ["software"]
    },
    
    {id: 14, 
    imageFile: "14.jpeg",
    imageWidth: "500px",
    date: "06/18/2018",
    caption: "The Octopus is a Software Engineering Intern (14)",
    nextID: 15,
    prevID: 13,
    tags: ["software"]
    },
    
    {id: 13, 
    imageFile: "13.jpeg",
    imageWidth: "500px",
    date: "06/15/2018",
    caption: "The Octopus is a Software Engineering Intern (13)",
    nextID: 14,
    prevID: 12,
    tags: ["software"]
    },
    
    {id: 12, 
    imageFile: "12.jpeg",
    imageWidth: "500px",
    date: "06/15/2018",
    caption: "The Octopus is a Software Engineering Intern (12)",
    nextID: 13,
    prevID: 11,
    tags: ["software"]
    },
    
    {id: 11, 
    imageFile: "11.jpeg",
    imageWidth: "500px",
    date: "06/11/2018",
    caption: "The Octopus is a Software Engineering Intern (11)",
    nextID: 12,
    prevID: 10,
    tags: ["software"]
    },

    {id: 10, 
    imageFile: "10.jpeg",
    imageWidth: "500px",
    date: "06/08/2018",
    caption: "The Octopus is a Software Engineering Intern (10)",
    nextID: 11,
    prevID: 9,
    tags: ["software"]
    },
    
    {id: 9, 
    imageFile: "9.jpeg",
    imageWidth: "500px",
    date: "06/11/2018",
    caption: "The Octopus is a Software Engineering Intern (9)",
    nextID: 10,
    prevID: 8,
    tags: ["software"]
    },

    {id: 8, 
    imageFile: "8.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (8)\n It's weird being an intern, because you wish that you had more work to do, but you also know that asking for more work just makes more work for your boss.",
    nextID: 9,
    prevID: 7,
    tags: ["software"]
    },

    {id: 7, 
    imageFile: "7.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (7)\n It's self aware!",
    nextID: 8,
    prevID: 6,
    tags: ["software"]
    },

    {id: 6, 
    imageFile: "6.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (6)",
    nextID: 7,
    prevID: 5,
    tags: ["software"]
    },

    {id: 5, 
    imageFile: "5.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (5)",
    nextID: 6,
    prevID: 4,
    tags: ["software"]
    },

    {id: 4, 
    imageFile: "4.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (4)",
    nextID: 5,
    prevID: 3,
    tags: ["software"]
    },

    {id: 3, 
    imageFile: "3.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (3)",
    nextID: 4,
    prevID: 2,
    tags: ["software"]
    },

    {id: 2, 
    imageFile: "2.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (2)",
    nextID: 3,
    prevID: 1,
    tags: ["software"]
    },

    {id: 1, 
    imageFile: "1.jpeg",
    imageWidth: "500px",
    date: "06/07/2018",
    caption: "The Octopus is a Software Engineering Intern (1)",
    nextID: 2,
    prevID: false,
    tags: ["software"]
    },
];

export function stringToSelectedTopics(str) {
    var charArray = Array.from(str);
    return(
        charArray.map((e) => 
            {
                if (e === '0') return false;
                return true;
            }
        )
    );
}

export function selectedTopicsToString(tpcs) {
    var charArray = tpcs.map((e) => e ? '1' : '0');
    return(charArray.join(""));
}