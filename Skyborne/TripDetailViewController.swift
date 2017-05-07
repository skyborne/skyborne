//
//  TripDetailViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/7/17.
//  Copyright © 2017 Skyborne Inc. All rights reserved.
//

import UIKit

class TripDetailViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .action, target: self, action: #selector(actionActivity))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // MARK: Navigation Bar Button Methods
    
    func actionActivity() -> Void {
        // TODO: Implement Action Feature (Such As Sharing Trip) & Add Available Social Media Apps To The Menu
        
        if let title = self.navigationItem.title {
            let shareItem = "My trip to \(String(describing: title)) managed by Skyborne!"
            let activityViewController = UIActivityViewController(activityItems: [shareItem], applicationActivities: nil)
            
            present(activityViewController, animated: true, completion: nil)
        }
    }

}
