import React from 'react';
import PostData from './PostData';
import img1 from '../../images/money.jpg';
import img2 from '../../images/energy.jpg';
import img3 from '../../images/mine.jpg';
import img4 from '../../images/eolien.jpg';
import img5 from '../../images/exploit.jpg';
import { Post, PostTitle, PostContainer, PostWrapper, PostItems } from './PublicElmts';

const Publications = () => {
    return (
        <>
            <Post id='publications'>
                
                <PostContainer>
                <PostTitle>Les Dernières Publications</PostTitle>
                    <PostWrapper>
                    <PostItems>
                        <PostData
                        src={img1}
                        text='$530 millions portés disparus - Sur les traces des avances fiscales de la Gécamines'
                        label='Communiqué'
                        path='/'
                        />
                        <PostData
                        src={img2}
                        text='Electrification de la RDC: A la recherche de pistes de solution'
                        label='Rapport'
                        path='/'
                        />
                    </PostItems>
                    <PostItems>
                        <PostData
                        src={img3}
                        text='Redevance minière destinée au ETD: un casse-tête à résoudre'
                        label='Rapport'
                        path='/services'
                        />
                        <PostData
                        src={img4}
                        text='Electrification de la RDC: A la recherche de pistes de solution'
                        label='Publication'
                        path='/products'
                        />
                        <PostData
                        src={img5}
                        text='$530 millions portés disparus - Sur les traces des avances fiscales de la Gécamines'
                        label='Presse'
                        path='/sign-up'
                        />
                    </PostItems>
                    </PostWrapper>
                </PostContainer>
            </Post>
        </>
    )
}

export default Publications
