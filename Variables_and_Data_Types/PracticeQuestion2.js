const profile = {
    userName : "@shradhakhapra",
    fullName : "Shradha Khapra",
    posts : 195,
    followers : 569000,
    following : 4,
    threadsUserName : "@shradhakhapra",
    category: "Entrepreneur",
    bio: "Apna College | Ex-Microsoft, DRDO\nTo educate someone is the highest privilege❤️",
    isFollow: false
};

console.log("Username: " + profile.userName);
console.log("Full Name: " + profile.fullName);
console.log("Am I following this profile: " + profile.isFollow);
console.log("Posts: " + profile.posts);
console.log("Followers: " + profile.followers);
console.log("Following: " + profile.following);
console.log("Threads Username: " + profile.threadsUserName);
console.log("Category: " + profile.category);
console.log("Bio:\n" + profile.bio);

console.log(typeof profile.threadsUserName);
