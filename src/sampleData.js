import {v4 as uuidv4} from 'uuid';

const shortid = require("shortid");

const rand = () => {
    return Math.floor(Math.random() * 100) + 1
}

const smallRand = () => {
    return Math.floor(Math.random() * 40) + 1
}

export const WishesObj = [
    {
        id: shortid.generate(),
        logo: `https://picsum.photos/id/237/200/300`,
        name: "Erick Flint",
        created: new Date(),
        amount_of_hearts: smallRand(),
        avatar: `https://i.pravatar.cc/150?img=${rand()}`,
        content: "Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: [
            {
                id: shortid.generate(),
                name: "James Moore",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Nulla quis sem at nibh elementum imperdiet. " +
                    "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus" +
                    " sed augue semper porta. Mauris massa. Vestibulum lacinia" +
                    " arcu eget nulla. Class aptent taciti sociosqu ad litora" +
                    " torquent per conubia nostra, per inceptos himenaeos. "
            },
            {
                id: shortid.generate(),
                name: "Sasha Tate",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." +
                    " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at" +
                    " dolor. Maecenas mattis."
            },
            {
                id: shortid.generate(),
                name: "John Doe",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." +
                    " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at" +
                    " dolor. Maecenas mattis."
            }
        ]
    },
    {
        id: shortid.generate(),
        logo: `https://picsum.photos/id/237/200/300`,
        name: "Adam Corola",
        created: new Date(),
        amount_of_hearts: smallRand(),
        avatar: `https://i.pravatar.cc/150?img=${rand()}`,
        content: "Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: [
            {
                id: shortid.generate(),
                name: "Philip Moris",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam," +
                    " a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti." +
                    " Nunc feugiat mi a tellus consequat imperdiet."
            },
            {
                id: shortid.generate(),
                name: "Sam James",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum." +
                    " Morbi in ipsum sit amet pede facilisis laoreet."
            }
        ]
    },
    {
        id: shortid.generate(),
        logo: `https://picsum.photos/id/237/200/300`,
        name: "Jesica Smith",
        created: new Date(),
        amount_of_hearts: smallRand(),
        avatar: `https://i.pravatar.cc/150?img=${rand()}`,
        content: "Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: [
            {
                id: shortid.generate(),
                name: "Adam Smith",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit" +
                    " amet mauris. Morbi in dui quis est pulvinar ullamcorper. "
            },
            {
                id: shortid.generate(),
                name: "Elijah Woods",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." +
                    " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at" +
                    " dolor. Maecenas mattis."
            },
            {
                id: shortid.generate(),
                name: "Max Voss",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Suspendisse potenti. Praesent facilisis ultrices sem sed gravida. Donec blandit" +
                    " hendrerit nulla, convallis pretium nisi semper vitae. Etiam suscipit sapien eu arcu pulvinar," +
                    " vitae maximus sapien volutpat."
            },
            {
                id: shortid.generate(),
                name: "Habib Kadiri",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas dui" +
                    " sit amet mauris dignissim, sed interdum nisl pellentesque. Maecenas non lorem blandit," +
                    " volutpat nisl in, rhoncus mauris."
            }
        ]
    },
    {
        id: shortid.generate(),
        logo: `https://picsum.photos/id/237/200/300`,
        name: "Alex Holmes",
        created: new Date(),
        amount_of_hearts: smallRand(),
        avatar: `https://i.pravatar.cc/150?img=${rand()}`,
        content: "Excepteur sint occaecat cupidatat non proident, " +
            "sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: [
            {
                id: shortid.generate(),
                name: "John Doe",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." +
                    " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at" +
                    " dolor. Maecenas mattis."
            },
            {
                id: shortid.generate(),
                name: "Elijah Woods",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." +
                    " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at" +
                    " dolor. Maecenas mattis."
            },
            {
                id: shortid.generate(),
                name: "James Moore",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Nulla quis sem at nibh elementum imperdiet. " +
                    "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus" +
                    " sed augue semper porta. Mauris massa. Vestibulum lacinia" +
                    " arcu eget nulla. Class aptent taciti sociosqu ad litora" +
                    " torquent per conubia nostra, per inceptos himenaeos. "
            },
            {
                id: shortid.generate(),
                name: "Sam James",
                created: new Date(),
                amount_of_likes: smallRand(),
                avatar: `https://i.pravatar.cc/150?img=${rand()}`,
                content: "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum." +
                    " Morbi in ipsum sit amet pede facilisis laoreet."
            }
        ]
    }
]