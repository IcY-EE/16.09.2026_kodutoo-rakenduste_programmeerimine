const user = {
  id: 1,
  profile: {
    name: "Maria",
    score: 0
  }
};

console.log(user.id);
console.log(user["profile"]);

user.age = 25;
user.profile.name = "Maria S.";

console.log(user.missingProperty);
console.log(user.profile?.address?.city);

console.log(user.profile.score ?? 10);
console.log(user.profile.score || 10);