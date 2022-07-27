import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chettinad Chicken Fry',
      'Maunika Gowardha\'s super-simple version of chettinad chicken flavours thigh fillets with ginger, turmeric, fennel seeds, cinnamon and dried red chillies!',
      'https://images.immediate.co.uk/production/volatile/sites/2/2020/06/Olive-Chettinad-Chicken-Fry-1-05a2f74-scaled-e1592511557885.jpg?resize=960,872?quality=90&webp=true&resize=300,272',

    ),
    new Recipe(
      'Aloo Gobi with Poached Eggs',
      'Aloo gobi is a vibrant dish made with potatoes, cauliflower and Indian spices. Our twist on this popular delicacy serves it with runny poached eggs for a quick and healthy midweek meal!',
      'https://images.immediate.co.uk/production/volatile/sites/2/2017/02/aloogobi.jpg?resize=960,872?quality=90&webp=true&crop=7px,2255px,3827px,1626px&resize=300,272',
    ),
    new Recipe(
      'Golda Chingri',
      'Fragrant garam masala pairs with coconut milk to create a creamy, spiced sauce for fried prawns. This recipe comes from Lila Di at London\'s Soho restaurant, Gunpowder!',
      'https://images.immediate.co.uk/production/volatile/sites/2/2021/12/Gunpowder-Soho-071-99c3740.jpg?resize=960,872?quality=90&webp=true&crop=14px,3726px,4653px,2002px&resize=300,272',
    )
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
