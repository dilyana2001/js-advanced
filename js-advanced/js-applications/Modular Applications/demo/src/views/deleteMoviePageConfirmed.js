import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js'



const deleteMovieTemplate = (onClick, movie) => html `
<div className="alert alert-danger" role="alert">
    Are you sure you want to delete movie ${movie.title}?
</div>

<div>
    <button class="btn btn-info" @click=${onClick}>Delete</button>
    <a class="btn btn-info" href="/movies/${movie._id}">Cancel</a>
    
</div>
`;

export function deleteMoviePage(context) {
    const onMovieDelete = () => {
        movieService.deleteMovie(context.params.movieId)
            .then(res => {
                console.log(res);
                context.page.redirect('/movies')
            })
    }
    movieService.getMovieById(context.params.movieId)
        .then(movie => {
            context.render(deleteMovieTemplate(onMovieDelete, movie))
        })
}