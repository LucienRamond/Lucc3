import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu viewport={false} className=" p-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} hover:bg-black/15`}
          >
            <Link href="/">Accueil</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="  data-[state=open]:bg-black/15">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent asChild>
            <ul className=" text-left min-w-2xs bg-white">
              <li>
                <NavigationMenuLink className=" hover:bg-black/15">
                  <Link href="/monopage">
                    <div className=" font-bold">Site monopage</div>
                    <p className=" italic">Création de site vitrine monopage</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className=" hover:bg-black/15">
                  <Link href="/ecommerce">
                    <div className=" font-bold">Site e-commerce</div>
                    <p className=" italic">
                      Création de site e-commerce sur mesure
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="  data-[state=open]:bg-black/15">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent asChild>
            <ul className=" text-left min-w-[150px] bg-white">
              <li>
                <NavigationMenuLink className=" hover:bg-black/15">
                  <Link href="/lentreprise" className=" font-medium">
                    L'entreprise
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className=" hover:bg-black/15">
                  <Link href="/devis" className=" font-medium">
                    Devis
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className=" hover:bg-black/15">
                  <Link href="/contact" className=" font-medium">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
