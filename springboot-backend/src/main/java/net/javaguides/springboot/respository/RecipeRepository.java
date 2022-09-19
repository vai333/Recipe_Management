package net.javaguides.springboot.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Long>{

}
