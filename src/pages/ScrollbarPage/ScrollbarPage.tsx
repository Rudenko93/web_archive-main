import { ETypographyVariant, Typography, Scrollbar } from "ui"
import { useRef } from "react"
import type { Scrollbar as TScrollbar } from "smooth-scrollbar/scrollbar"
import type { OverscrollEffect } from "smooth-scrollbar/plugins/overscroll"
import "./ScrollbarPage.scss"

export const ScrollbarPage: React.FC = () => {
  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel excepturi aspernatur culpa nam debitis officiis saepe, blanditiis cupiditate fugit perspiciatis magni ex dignissimos ipsam? Hic, voluptatibus facere. Ipsa in cupiditate dolorum perferendis maxime accusantium, necessitatibus illo ipsam quae dolorem inventore, id animi, quod magni maiores sequi? Vero, atque, deserunt omnis ipsum reiciendis id perferendis consectetur dignissimos libero dicta consequatur explicabo rerum, beatae obcaecati molestias ratione harum laborum? Alias, modi odit. Eius labore cum odit eligendi inventore laboriosam suscipit, ab voluptas ea officiis voluptates odio at aspernatur excepturi vitae itaque ipsam voluptatem iusto neque repellendus unde rerum eum quibusdam nobis! Sit quaerat laborum, facere quidem assumenda consequuntur non reprehenderit quas placeat sapiente? A, ullam earum necessitatibus numquam quis maxime. Reiciendis aliquam mollitia, fuga dignissimos ullam, tempore doloribus optio similique debitis amet libero reprehenderit odit consectetur fugit expedita consequatur facilis aspernatur sunt provident at, unde nobis pariatur. Nihil quidem expedita odit aliquam commodi eligendi est ipsa unde et similique soluta labore quasi nisi laudantium rerum possimus consectetur rem necessitatibus dolorum deleniti, corporis impedit animi perferendis! Rerum placeat dolorum voluptatibus itaque reprehenderit nihil voluptate, veniam illum numquam deserunt asperiores deleniti consequuntur quibusdam et eos ab quisquam eveniet, corrupti aliquam rem repellendus nesciunt soluta dolor? Dolores, alias quo sunt, hic dolorem temporibus deleniti iste ducimus quod ad minima debitis ab. Pariatur earum quae sint recusandae voluptates deserunt excepturi, itaque doloribus ipsa aut obcaecati est ab, quisquam corporis. Culpa exercitationem sapiente, ad voluptatum amet officia quasi. Amet esse voluptates non numquam voluptas ipsam itaque modi. Atque maxime necessitatibus dicta eligendi, sequi fugiat, repudiandae perferendis inventore ullam facilis eveniet quo molestias. Nulla dolorum error vitae enim consequatur? Ea ratione distinctio odio nemo itaque magni, natus id similique vero sit, enim ipsam beatae nesciunt non modi quibusdam animi. Saepe iste soluta officia ipsam, assumenda molestiae! Eos!"

  const scrollbar = useRef<TScrollbar | null>(null)

  return (
    <section className="ScrollbarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Scrollbar
      </Typography>

      <Scrollbar
        alwaysShowTracks
        ref={scrollbar}
        plugins={{
          overscroll: {
            effect: "glow",
            // effect: "bounce",
          } as unknown as OverscrollEffect,
        }}>
        <div className="ScrollbarPage__content" id="my-scrollbar">
          {description}
        </div>
      </Scrollbar>
    </section>
  )
}
