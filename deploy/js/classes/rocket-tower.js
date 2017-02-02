var TowerDefense = TowerDefense || {};


TowerDefense.RocketTower = function (parentState, posX, posY) {
      // parentState, posX, posY, range, fireRate, dmg, bulletspeed, image
      TowerDefense.Tower.call(this, parentState, posX, posY, 'rocket-tower', parentState.tileDimensions * 8, 800, 8, 160, 'rocket');

      this.price = 20;
}

TowerDefense.RocketTower.price = 20;



TowerDefense.RocketTower.prototype = Object.create(TowerDefense.Tower.prototype);
TowerDefense.RocketTower.prototype.constructor = TowerDefense.RocketTower;
