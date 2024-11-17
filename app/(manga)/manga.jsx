import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMangaById  } from '../../api/mangaApi'
import MangaInformation from '../../components/mangaInformation/MangaInformation'
import LoadingItem from '../../components/LoadingItem'

const Manga = ({id}) => {

    const [mangaData, setMangaData] = useState(null);
    
    useEffect(() => {
        // Fetch manga data when the component mounts
        const loadMangaData = async () => {
            try {
                const response = await fetchMangaById(id);
                setMangaData(response.data);
            } catch (error) {
                console.error("Error fetching manga:", error);
            }
        };

        loadMangaData();
    }, []);


    return (
        <View>
            {mangaData ? (
                <>
                    <MangaInformation
                        id={id}
                        data={mangaData}
                    />
                </>
            ) : (
                <LoadingItem />
            )}
        </View>
    )
}

export default Manga