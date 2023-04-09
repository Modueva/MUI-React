import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300} >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/tYRwVMb/mark-cukerberg.jpg" />
          <Avatar alt="Travis Howard" src="https://avatars.mds.yandex.net/i?id=357ad2f4e940b0cc05110388e773b921-5348428-images-thumbs&n=13" />
          <Avatar alt="Cindy Baker" src="https://kartinkin.net/uploads/posts/2021-09/1632268155_46-kartinkin-net-p-ilon-mask-art-krasivo-54.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.pinimg.com/originals/a4/77/e3/a477e3fe14c961ca6baeee948d9197f9.jpg" />
          <Avatar alt="Trevor Henderson" src="https://o-krohe.ru/images/article/orig/2018/09/samyj-sostoyatelnyj-chelovek-v-mire-reshil-pomogat-detyam-mechtatelyam.jpg" />
          <Avatar alt="Trevor Henderson" src="https://o-krohe.ru/images/article/orig/2018/09/samyj-sostoyatelnyj-chelovek-v-mire-reshil-pomogat-detyam-mechtatelyam.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://a.allegroimg.com/original/11e512/977b03aa417f9ee1b8a4db6f8bc5/TESLA-MODEL-S-PODSWIETLENIE-LAMPKA-LED-KLAMKI-Jakosc-czesci-zgodnie-z-GVO-O-oryginal-z-logo-producenta-samochodu-OE" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.trse.ru/2015/02/tesla-model-s-2015-features.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://avatars.mds.yandex.net/i?id=cb1582a210200cb1fe783b118e3748207f717666-8404489-images-thumbs&n=13" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://avatars.mds.yandex.net/i?id=0e511dc9718f0fa1da021da63e09f5f971d5c0b9-7761820-images-thumbs&n=13" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://avatars.mds.yandex.net/i?id=847c9f6bfb2f09672e89b9318aa63f4453d83c3e-8497406-images-thumbs&n=13" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://avatars.mds.yandex.net/i?id=d506ba4807f96c74d52ceb8952b6046e2d6e49a1-9138191-images-thumbs&n=13" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avarar" src="https://avatars.mds.yandex.net/i?id=dda060aa80de27883fbda30203e04be3-5292679-images-thumbs&n=13" />
        </ListItemAvatar>
        <ListItemText
          primary="Джефф Безос"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src="https://avatars.mds.yandex.net/i?id=b8f0f88dbd54ba2701d89e2479a9d40d8ceb184e-4552023-images-thumbs&n=13" />
        </ListItemAvatar>
        <ListItemText
          primary="Билл Гейтс"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src="https://avatars.mds.yandex.net/i?id=5c170319ba5494bc4e3a56b29dcde7485897cae9-8500949-images-thumbs&n=13" />
        </ListItemAvatar>
        <ListItemText
          primary="Илон Маск"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
