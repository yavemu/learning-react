import React from 'react';
import {render} from 'react-dom';
import Playlist from './playlist/components/playlist';
import data from './api.json';

const root = document.getElementById('root');
render(<Playlist data={data} />, root);