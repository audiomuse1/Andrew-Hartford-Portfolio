import Profile from "../Models/Profile";

export function list(request, response) {
    Profile.find({}).exec()
    .then(profiles => {
        return response.json(profiles);
    });
}

export function show(request, response) {
    Profile.findById(request.params.id).exec()
    .then(profile => {
        return response.json(profile);
    });
}

export function create(request, response) {
    const profile = new Profile({
        name: request.body.name,
        location: request.body.location,
        email: request.body.email,
        linkedin: request.body.linkedin,
        birthday: request.body.birthday,
        bio: request.body.bio
    });
    profile.save()
    .then(profiles => {
        return response.json(profiles);
    });
}

export function update(request, response) {
    return response.json(Profile[0].name = request.params.id);
}

export function remove(request, response) {
    Profile.findByIdAndRemove(request.params.id).exec()
    .then(profiles => {
        return response.json(profiles);
    });
}
