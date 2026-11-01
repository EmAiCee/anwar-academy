import {
  FaBuilding,
  FaDoorOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFlask,
  FaBook,
  FaFutbol,
  FaChild,
  FaUsers,
  FaGraduationCap,
  FaTrophy,
  FaPalette,
  FaMusic,
  FaTree,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type GalleryCategory =
  | "premises"
  | "classrooms"
  | "labs"
  | "library"
  | "nursery"
  | "primary"
  | "secondary"
  | "sports"
  | "events";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  icon: IconType;
  image: string;
  gradient: string;
  tall?: boolean;
};

export const categories: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All Photos" },
  { key: "premises", label: "Premises" },
  { key: "classrooms", label: "Classrooms" },
  { key: "labs", label: "Labs" },
  { key: "library", label: "Library" },
  { key: "nursery", label: "Nursery" },
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "sports", label: "Sports" },
  { key: "events", label: "Events" },
];

export const galleryItems: GalleryItem[] = [
  // Premises
  { id: "p1", title: "School Building Exterior", category: "premises", icon: FaBuilding, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-indigo-900", tall: true },
  { id: "p2", title: "Main Entrance", category: "premises", icon: FaDoorOpen, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-rose-900" },
  { id: "p3", title: "School Grounds", category: "premises", icon: FaTree, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&auto=format&fit=crop", gradient: "from-emerald-600 to-emerald-900" },

  // Classrooms
  { id: "c1", title: "Primary Classroom", category: "classrooms", icon: FaChalkboardTeacher, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-blue-900" },
  { id: "c2", title: "Nursery Learning Space", category: "classrooms", icon: FaChalkboardTeacher, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-pink-900", tall: true },
  { id: "c3", title: "Secondary Classroom", category: "classrooms", icon: FaChalkboardTeacher, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop", gradient: "from-slate-700 to-slate-900" },

  // Labs
  { id: "l1", title: "Computer Laboratory", category: "labs", icon: FaLaptopCode, image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-indigo-900" },
  { id: "l2", title: "Science Laboratory", category: "labs", icon: FaFlask, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-orange-900", tall: true },

  // Library
  { id: "lb1", title: "School Library", category: "library", icon: FaBook, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&auto=format&fit=crop", gradient: "from-amber-600 to-amber-900" },
  { id: "lb2", title: "Reading Corner", category: "library", icon: FaBook, image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-blue-900" },

  // Nursery
  { id: "n1", title: "Nursery Play Time", category: "nursery", icon: FaChild, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80&auto=format&fit=crop", gradient: "from-pink-500 to-rose-900" },
  { id: "n2", title: "Creative Arts Session", category: "nursery", icon: FaPalette, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-pink-900", tall: true },
  { id: "n3", title: "Music & Movement", category: "nursery", icon: FaMusic, image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1200&q=80&auto=format&fit=crop", gradient: "from-purple-600 to-purple-900" },

  // Primary
  { id: "pr1", title: "Primary Assembly", category: "primary", icon: FaUsers, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-indigo-900" },
  { id: "pr2", title: "Primary Science Fair", category: "primary", icon: FaFlask, image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=1200&q=80&auto=format&fit=crop", gradient: "from-emerald-600 to-teal-900", tall: true },

  // Secondary
  { id: "s1", title: "Secondary Lecture", category: "secondary", icon: FaGraduationCap, image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80&auto=format&fit=crop", gradient: "from-slate-700 to-brand-blue" },
  { id: "s2", title: "Group Study Session", category: "secondary", icon: FaUsers, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-rose-900" },

  // Sports
  { id: "sp1", title: "Football Field", category: "sports", icon: FaFutbol, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80&auto=format&fit=crop", gradient: "from-green-600 to-emerald-900", tall: true },
  { id: "sp2", title: "Annual Sports Day", category: "sports", icon: FaTrophy, image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80&auto=format&fit=crop", gradient: "from-amber-500 to-orange-900" },

  // Events
  { id: "e1", title: "Graduation Ceremony", category: "events", icon: FaGraduationCap, image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-blue to-indigo-900" },
  { id: "e2", title: "Cultural Day", category: "events", icon: FaPalette, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop", gradient: "from-brand-red to-rose-900", tall: true },
  { id: "e3", title: "Award Ceremony", category: "events", icon: FaTrophy, image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80&auto=format&fit=crop", gradient: "from-amber-500 to-yellow-900" },
];