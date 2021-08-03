
console.log('Before');
getUser(1, (user) =>{
    getrepositories(user.gitHubUsername, (repos) => {
        getcommits(repo, (commits) => {
            // CALLBACK HELL
        });
    });

} );
console.log('After');





function getUser(id, callback)
{
    setTimeout(() => {
        console.log('Reading a user froma a database...');
        callback({id : id, gitHubUsername: 'mosh'});
    }, 2000);
}
function getrepositories(username, callback)
{
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}