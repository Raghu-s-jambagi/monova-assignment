# Monova Assignment — React Native (Expo Snack)

**Author:** Raghu S Jambagi  
**Date:** Sep 28, 2025  

**Expo Snack:https://snack.expo.dev/@jambagi/136f49
**GitHub Repo:https://github.com/Raghu-s-jambagi/monova-assignment/tree/main/joyous-yellow-tortillas  

---

## Features
- 2 column inventory grid with cards  
- Filter chips for Casual / Formal / Sport  
- Outfit carousel with horizontal scroll and scale effect  
- Loading skeleton before data shows  
- Empty state message if filters have no result  
- Works on web and mobile with Expo Snack  

---

## Assumptions
- Data is mocked in `inventory.js` (or `mockInventory.ts`)  
- Used React Native Animated API for simple animations  
- Project made for assignment demo only  

---

## Components
- **ItemCard** — shows item with image and tags  
- **FilterBar** — shows category chips  
- **OutfitCarousel** — scrollable outfit list  
- **HomeScreen** — combines everything  

---

## How to Run
1. Open the Expo Snack link above (runs on web & mobile).  
2. Or clone repo and run locally:
   ```bash
   git clone https://github.com/Raghu-s-jambagi/monova-assignment.git
   cd joyous-yellow-tortillas
   npm install
   npx expo start
