import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const CarouselEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_carousel" disabled />
      <TextInput source="img_top1" label="Img1 Carousel Top" />
      <TextInput source="img_top2" label="Img2 Carousel Top" />
      <TextInput source="video" label="Vidéo Carousel Top" />
      <TextInput source="img_bottom1" label="Img1 Carousel Bas" />
      <TextInput source="img_bottom2" label="Img2 Carousel Bas" />
      <TextInput source="img_bottom3" label="Img3 Carousel Bas" />
      <TextInput source="img_top3" label="ImgOptionnelle (indisponible)" />
    </SimpleForm>
  </Edit>
);
