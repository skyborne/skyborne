//
//  AddTripViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/6/17.
//  Copyright © 2017 Skyborne Inc. All rights reserved.
//

import UIKit

class AddTripViewController: UIViewController {
    
    // MARK: Properties
    
    @IBOutlet var cancelAddTrip: UIBarButtonItem!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    // MARK: Actions
    
    @IBAction func cancelAddTrip(_ sender: UIBarButtonItem) {
        self.dismiss(animated: true, completion: nil)
    }
}
