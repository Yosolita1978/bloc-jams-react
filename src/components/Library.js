import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

   render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <div key={index} className={(index === 0) ? "float-album-left" : "float-album-right" }>
            <Link to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} className="image-resize" alt={album.title} />
               <div className="album-title">{album.title}</div>
               <div className="album-artist">{album.artist}</div>
               <div className="album-songs">{album.songs.length} songs</div>
            </Link>
            </div>
        )
        }
      </section>
     );
    }
}

export default Library;
