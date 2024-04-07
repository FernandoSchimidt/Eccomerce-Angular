package fernandoschimidt.eccomercespring.controller;

import fernandoschimidt.eccomercespring.model.ProductCategory;
import fernandoschimidt.eccomercespring.service.ProductCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-category")
public class ProductCategoryController {

    private final ProductCategoryService productCategoryService;

    public ProductCategoryController(ProductCategoryService productCategoryService) {
        this.productCategoryService = productCategoryService;
    }

    @PostMapping
    private ProductCategory createCaategory(@RequestBody ProductCategory productCategory) {
        return productCategoryService.create(productCategory);
    }

    @GetMapping
    private List<ProductCategory> listCategories() {
        return productCategoryService.listCategories();
    }
}
