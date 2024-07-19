import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAMFBMVEXk5ueutLfp6+u3vb+psLPh4+Td4OHKztDY29yyuLu9wsTT1tjAxcfEyMrO0tTHy81nKxu5AAADu0lEQVR4nO2c2ZKsIAxANSyyuPz/3161na5prwskmtg1nJd+PRUhBAhdVYVCoVAoFAqFQqFQKBQ4AGmBE6Ay1vVD17bt0ERnDTzSGEzslNdvah+6+Lzggm3rDXxrn6Uald7yrGutg5OWewMx7GjOqnV4SlS7fcuFQVpxBJw/COdPVJUV94ynlrOplx6pTZLnRC86ULvzz/4Oai/oOaR7TjEV80z/7q+YRhlN6LPiOZnKzH2TqTmijISoyhfVrYDnkO85DVP2JGUxniPcorBXLp2FdGA2dTjPsUJlnvmImbTAW0k5tCdzSDPW+DWaszoxHh9R1okf8QEdQ8pXmgJ+Kk3wZSigBHRc8bk88Un0Bdu2BPLq5f/hqqAh0Dx1wyRKS06jaGAqSy1RlK1+dlRRzySaduZwANfe6WtE+78jypTx/1BEy2S6WLRmEv2ahE9eQgOPJ2WvPKM7Js+vKfOAmp/YDnQNcSvCdgRB3dzx7UJJmybOoxLSNlSzaY6DlJKgPOcJKWHeM57oVKTFifdmBDb7HZICypXtf0yx04nv4GkRbZCXDezX4ciJz5fs36DKZ65K9APE8iRzZw/5KUriKrRCnOqxrkm/ybxt4r60+22aNUwFW4ogY0PqZfvJkk2VdN+bSWgkYzwNPwCaU1Xtmye0EYI7aTLQwT3Bc6Kv91W1F2p32gKgUZuuulb87S6HTB3OXn+6au0H97wu5zEB2CHUi+z4oxrxptF9ACrrXHTOVs/sbX8BK6R9drBxeiwQ1Exou6aPzjzmmcPymqFdXgp8zqUJr7reWSPrC+BiF1StDxP+bNs2gvN/TEiHK9IKH/g3IuPcju3BarQbW9VbwxdYgNiuk3uyqw8NkyqYhnor0nKsBG5AxvIjriHeG1awIX9kbqPurKkM8d6GRxUstd1pzT1PnRJ2HAi6y4eqJV4r7nF1+U/uJdhFX5mrTHvDV3+b+qs2K0BoaE5TvehYn9R+m2Z6xfEEoJ5a5Joq+uw/ekl5JdQpxeVJbNOl9jpkmRKO+4AtnjP4r094v4ABe3Se/6aOCvL6kdjEjkB3mGGKePtHN8WUKOiLbgqIYco+QF9kd8NJfPiJ3GeOcGdhd0jm/fPdld0BeTOfcelckzWfBAOa9XKUsxbZME0PKLGbkSqafM2H7cC5Cp8cUeppHZXUhVRyKs0k9kBD5l87XE9q+57onJ9J2z/ddcyUTmK1Jz5Ex5yfJHr/ycgpISmTCmfRibTNk1iF94sk0U6Jk7g2rW+zBUgTLRSexD/b7jGIZUPUDAAAAABJRU5ErkJggg==",
   }
},
    { timestamps: true }
)

const User=mongoose.model("User",userSchema);

export default User;